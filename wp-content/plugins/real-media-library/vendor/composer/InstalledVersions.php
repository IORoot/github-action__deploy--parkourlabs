<?php

namespace MatthiasWeb\RealMediaLibrary\Vendor\Composer;

use MatthiasWeb\RealMediaLibrary\Vendor\Composer\Semver\VersionParser;
class InstalledVersions {
    private static $installed = [
        'root' => [
            'pretty_version' => 'dev-master',
            'version' => 'dev-master',
            'aliases' => [],
            'reference' => '9eddfed8d2262cbc8f5304e1daaf5fca24803b80',
            'name' => '__root__'
        ],
        'versions' => [
            '__root__' => [
                'pretty_version' => 'dev-master',
                'version' => 'dev-master',
                'aliases' => [],
                'reference' => '9eddfed8d2262cbc8f5304e1daaf5fca24803b80'
            ],
            'devowl-wp/freemium' => [
                'pretty_version' => 'dev-develop',
                'version' => 'dev-develop',
                'aliases' => [],
                'reference' => '5c29663e53ba6dd5089d2208b2dd0c1bcba8fbb5'
            ],
            'devowl-wp/real-utils' => [
                'pretty_version' => 'dev-feat/real-utils',
                'version' => 'dev-feat/real-utils',
                'aliases' => [],
                'reference' => 'cbb1dc60ff12db3200f68d8817434bd587157863'
            ],
            'devowl-wp/utils' => [
                'pretty_version' => 'dev-feat/multipackage',
                'version' => 'dev-feat/multipackage',
                'aliases' => [],
                'reference' => 'bb1d92ba33ae3925685c4cc5701938b71e37627b'
            ],
            'matthiasweb/wordpress-plugin-updater' => [
                'pretty_version' => 'dev-master',
                'version' => 'dev-master',
                'aliases' => [],
                'reference' => 'c801fd86c4cf97f3b0c59d653c5e7bce99cebb73'
            ]
        ]
    ];
    public static function getInstalledPackages() {
        return \array_keys(self::$installed['versions']);
    }
    public static function isInstalled($packageName) {
        return isset(self::$installed['versions'][$packageName]);
    }
    public static function satisfies(
        \MatthiasWeb\RealMediaLibrary\Vendor\Composer\Semver\VersionParser $parser,
        $packageName,
        $constraint
    ) {
        $constraint = $parser->parseConstraints($constraint);
        $provided = $parser->parseConstraints(self::getVersionRanges($packageName));
        return $provided->matches($constraint);
    }
    public static function getVersionRanges($packageName) {
        if (!isset(self::$installed['versions'][$packageName])) {
            throw new \OutOfBoundsException('Package "' . $packageName . '" is not installed');
        }
        $ranges = [];
        if (isset(self::$installed['versions'][$packageName]['pretty_version'])) {
            $ranges[] = self::$installed['versions'][$packageName]['pretty_version'];
        }
        if (\array_key_exists('aliases', self::$installed['versions'][$packageName])) {
            $ranges = \array_merge($ranges, self::$installed['versions'][$packageName]['aliases']);
        }
        if (\array_key_exists('replaced', self::$installed['versions'][$packageName])) {
            $ranges = \array_merge($ranges, self::$installed['versions'][$packageName]['replaced']);
        }
        if (\array_key_exists('provided', self::$installed['versions'][$packageName])) {
            $ranges = \array_merge($ranges, self::$installed['versions'][$packageName]['provided']);
        }
        return \implode(' || ', $ranges);
    }
    public static function getVersion($packageName) {
        if (!isset(self::$installed['versions'][$packageName])) {
            throw new \OutOfBoundsException('Package "' . $packageName . '" is not installed');
        }
        if (!isset(self::$installed['versions'][$packageName]['version'])) {
            return null;
        }
        return self::$installed['versions'][$packageName]['version'];
    }
    public static function getPrettyVersion($packageName) {
        if (!isset(self::$installed['versions'][$packageName])) {
            throw new \OutOfBoundsException('Package "' . $packageName . '" is not installed');
        }
        if (!isset(self::$installed['versions'][$packageName]['pretty_version'])) {
            return null;
        }
        return self::$installed['versions'][$packageName]['pretty_version'];
    }
    public static function getReference($packageName) {
        if (!isset(self::$installed['versions'][$packageName])) {
            throw new \OutOfBoundsException('Package "' . $packageName . '" is not installed');
        }
        if (!isset(self::$installed['versions'][$packageName]['reference'])) {
            return null;
        }
        return self::$installed['versions'][$packageName]['reference'];
    }
    public static function getRootPackage() {
        return self::$installed['root'];
    }
    public static function getRawData() {
        return self::$installed;
    }
    public static function reload($data) {
        self::$installed = $data;
    }
}
