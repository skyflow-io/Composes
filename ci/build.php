<?php

require __DIR__.'/../vendor/autoload.php';

use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Finder\Finder;
use ColorThief\ColorThief;

$fileSystem = new Filesystem();
$result = [];
$docResult = [];
$composeFinder = new Finder();
$composeFinder->directories()->depth(0)->in('/app/src')->sortByName();

foreach ($composeFinder as $compose) {
    $name = $compose->getBasename();
    $files = [
        'name' => $name,
        'files' => []
    ];
    $filesFinder = new Finder();
    $filesFinder->files()->in('/app/src/' . $name);

    foreach ($filesFinder as $file) {
        $filename = $file->getFilename();
        $files['files'][] = [
            'directory' => $file->getRelativePath(),
            'filename' => $filename,
            'contents' => $file->getContents(),
        ];
        if($filename === ($name . '.config.json')){
            $doc = json_decode($file->getContents(), true);
            $doc['logo'] = 'default.png';
            if($fileSystem->exists('public/images/' . $doc['slug'] . '.png')){
                $doc['logo'] = $doc['slug'] . '.png';
            }
            if(!$doc['color'] && $doc['logo']){
                $color = ColorThief::getColor('public/images/' . $doc['logo']);
                $doc['color'] = strtoupper(sprintf("#%02x%02x%02x", $color[0], $color[1], $color[2]));
            }
            $docResult[] = $doc;
        }
    }

    $result[] = $files;
}

$fileSystem->remove(['/app/data/composes.json', '/app/doc/composes.json']);
$fileSystem->dumpFile('/app/data/composes.json', json_encode($result));
$fileSystem->dumpFile('/app/doc/composes.json', json_encode($docResult));