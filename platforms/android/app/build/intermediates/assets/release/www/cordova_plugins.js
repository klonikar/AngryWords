cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "org.apache.cordova.file.DirectoryEntry",
    "file": "plugins/org.apache.cordova.file/www/DirectoryEntry.js",
    "pluginId": "org.apache.cordova.file",
    "clobbers": [
      "window.DirectoryEntry"
    ]
  },
  {
    "id": "org.apache.cordova.file.DirectoryReader",
    "file": "plugins/org.apache.cordova.file/www/DirectoryReader.js",
    "pluginId": "org.apache.cordova.file",
    "clobbers": [
      "window.DirectoryReader"
    ]
  },
  {
    "id": "org.apache.cordova.file.Entry",
    "file": "plugins/org.apache.cordova.file/www/Entry.js",
    "pluginId": "org.apache.cordova.file",
    "clobbers": [
      "window.Entry"
    ]
  },
  {
    "id": "org.apache.cordova.file.File",
    "file": "plugins/org.apache.cordova.file/www/File.js",
    "pluginId": "org.apache.cordova.file",
    "clobbers": [
      "window.File"
    ]
  },
  {
    "id": "org.apache.cordova.file.FileEntry",
    "file": "plugins/org.apache.cordova.file/www/FileEntry.js",
    "pluginId": "org.apache.cordova.file",
    "clobbers": [
      "window.FileEntry"
    ]
  },
  {
    "id": "org.apache.cordova.file.FileError",
    "file": "plugins/org.apache.cordova.file/www/FileError.js",
    "pluginId": "org.apache.cordova.file",
    "clobbers": [
      "window.FileError"
    ]
  },
  {
    "id": "org.apache.cordova.file.FileReader",
    "file": "plugins/org.apache.cordova.file/www/FileReader.js",
    "pluginId": "org.apache.cordova.file",
    "clobbers": [
      "window.FileReader"
    ]
  },
  {
    "id": "org.apache.cordova.file.FileSystem",
    "file": "plugins/org.apache.cordova.file/www/FileSystem.js",
    "pluginId": "org.apache.cordova.file",
    "clobbers": [
      "window.FileSystem"
    ]
  },
  {
    "id": "org.apache.cordova.file.FileUploadOptions",
    "file": "plugins/org.apache.cordova.file/www/FileUploadOptions.js",
    "pluginId": "org.apache.cordova.file",
    "clobbers": [
      "window.FileUploadOptions"
    ]
  },
  {
    "id": "org.apache.cordova.file.FileUploadResult",
    "file": "plugins/org.apache.cordova.file/www/FileUploadResult.js",
    "pluginId": "org.apache.cordova.file",
    "clobbers": [
      "window.FileUploadResult"
    ]
  },
  {
    "id": "org.apache.cordova.file.FileWriter",
    "file": "plugins/org.apache.cordova.file/www/FileWriter.js",
    "pluginId": "org.apache.cordova.file",
    "clobbers": [
      "window.FileWriter"
    ]
  },
  {
    "id": "org.apache.cordova.file.Flags",
    "file": "plugins/org.apache.cordova.file/www/Flags.js",
    "pluginId": "org.apache.cordova.file",
    "clobbers": [
      "window.Flags"
    ]
  },
  {
    "id": "org.apache.cordova.file.LocalFileSystem",
    "file": "plugins/org.apache.cordova.file/www/LocalFileSystem.js",
    "pluginId": "org.apache.cordova.file",
    "clobbers": [
      "window.LocalFileSystem"
    ],
    "merges": [
      "window"
    ]
  },
  {
    "id": "org.apache.cordova.file.Metadata",
    "file": "plugins/org.apache.cordova.file/www/Metadata.js",
    "pluginId": "org.apache.cordova.file",
    "clobbers": [
      "window.Metadata"
    ]
  },
  {
    "id": "org.apache.cordova.file.ProgressEvent",
    "file": "plugins/org.apache.cordova.file/www/ProgressEvent.js",
    "pluginId": "org.apache.cordova.file",
    "clobbers": [
      "window.ProgressEvent"
    ]
  },
  {
    "id": "org.apache.cordova.file.fileSystems",
    "file": "plugins/org.apache.cordova.file/www/fileSystems.js",
    "pluginId": "org.apache.cordova.file"
  },
  {
    "id": "org.apache.cordova.file.requestFileSystem",
    "file": "plugins/org.apache.cordova.file/www/requestFileSystem.js",
    "pluginId": "org.apache.cordova.file",
    "clobbers": [
      "window.requestFileSystem"
    ]
  },
  {
    "id": "org.apache.cordova.file.resolveLocalFileSystemURI",
    "file": "plugins/org.apache.cordova.file/www/resolveLocalFileSystemURI.js",
    "pluginId": "org.apache.cordova.file",
    "merges": [
      "window"
    ]
  },
  {
    "id": "org.apache.cordova.file.androidFileSystem",
    "file": "plugins/org.apache.cordova.file/www/android/FileSystem.js",
    "pluginId": "org.apache.cordova.file",
    "merges": [
      "FileSystem"
    ]
  },
  {
    "id": "org.apache.cordova.file.fileSystems-roots",
    "file": "plugins/org.apache.cordova.file/www/fileSystems-roots.js",
    "pluginId": "org.apache.cordova.file",
    "runs": true
  },
  {
    "id": "org.apache.cordova.file.fileSystemPaths",
    "file": "plugins/org.apache.cordova.file/www/fileSystemPaths.js",
    "pluginId": "org.apache.cordova.file",
    "merges": [
      "cordova"
    ],
    "runs": true
  },
  {
    "id": "org.apache.cordova.media.MediaError",
    "file": "plugins/org.apache.cordova.media/www/MediaError.js",
    "pluginId": "org.apache.cordova.media",
    "clobbers": [
      "window.MediaError"
    ]
  },
  {
    "id": "org.apache.cordova.media.Media",
    "file": "plugins/org.apache.cordova.media/www/Media.js",
    "pluginId": "org.apache.cordova.media",
    "clobbers": [
      "window.Media"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "org.apache.cordova.file": "1.3.1",
  "org.apache.cordova.media": "0.2.13"
};
// BOTTOM OF METADATA
});