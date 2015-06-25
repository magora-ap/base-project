(function () {
    'use strict';

    angular.module('app.note.form', [])
        .directive('noteForm', function () {
            return {
                restrict: 'E',
                replace: true,
                bindToController: true,
                templateUrl: 'note/form/form.tpl.html',
                scope: {
                    noteForEdit: '='
                },
                controller: ['NoteFactory', function (NoteFactory) {
                    this.save = function () {
                        NoteFactory.save(this.noteForEdit);
                        this.noteForEdit = {};
                    };
                }],
                controllerAs: 'noteFormCtrl'
            };
        });
})();