(function () {
    'use strict';

    angular.module('app.note.list', ['app.note.list.item'])
        .directive('noteList', function () {
            return {
                restrict: 'E',
                replace: true,
                bindToController: true,
                templateUrl: 'note/list/list.tpl.html',
                scope: {
                    noteForEdit: '='
                },
                controller: ['NoteFactory', function (NoteFactory) {

                    this.getAll = function () {
                        return NoteFactory.getAll();
                    };

                    this.setCurrentNote = function (id) {
                        this.noteForEdit = NoteFactory.getById(id);
                    };

                    this.removeNote = function (id) {
                        NoteFactory.remove(id);
                    };

                }],
                controllerAs: 'noteListCtrl'
            };
        });
})();