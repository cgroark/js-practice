split a string to get the file name after the _ and after the second .
class FileNameExtractor {
    static extractFileName (dirtyFileName) {
      let splitup = dirtyFileName.split('');
      let final = splitup.slice(splitup.indexOf('_')+1, splitup.indexOf('.',splitup.indexOf('.')+1)).join('')
      return final
    }
}
FileNameExtractor.extractFileName('1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION')