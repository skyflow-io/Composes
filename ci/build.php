<?php

require __DIR__.'/../vendor/autoload.php';

use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Finder\Finder;

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
            $docResult[] = [
                'name'=> $doc['name'],
                'description'=> $doc['description'],
                'author'=> $doc['author']['name'],
            ];
        }

    }

    $result[] = $files;
}

$fileSystem->appendToFile('/app/data/composes.json', json_encode($result));
$fileSystem->appendToFile('/app/doc/composes.json', json_encode($docResult));