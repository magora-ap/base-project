(function () {
    'use strict';

    angular.module('app.note.list.item', [])
        .directive('noteListItem', function () {
            return {
                restrict: 'E',
                replace: true,
                bindToController: true,
                templateUrl: 'note/list/item/item.tpl.html',
                scope: {
                    ngModel: '=',
                    setCurrentNote: '&',
                    removeNote: '&'
                },

                controller: ['NoteFactory', function (NoteFactory) {
                    this.getName = function () {
                        return this.ngModel.name;
                    };
                }],
                controllerAs: 'noteListItemCtrl'
            };
        });
})();