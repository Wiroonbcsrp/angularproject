(function() {
  'use strict';

  angular
    .module('angularproject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
