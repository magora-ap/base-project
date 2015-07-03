(function () {
    'use strict';
    angular
        .module('app.note')
        .factory('NoteFactory', noteFactory);

    function noteFactory() {

        function NoteFactory() {
            this.notes = localStorage.getItem('notes');

            if (!this.notes || this.notes === undefined) {
                this.notes = [];
            } else {
                this.notes = JSON.parse(this.notes);
            }
        }

        NoteFactory.prototype.add = function (data) {
            this.notes.push(data);
            this._sync();
        };

        NoteFactory.prototype.isNewRecord = function (note) {
            return this.notes.indexOf(note) === -1;
        };

        NoteFactory.prototype.save = function (data) {
            if (data !== undefined && this.isNewRecord(data)) {
                this.add(data);
            }
            this._sync();
        };

        NoteFactory.prototype._sync = function () {
            localStorage.setItem('notes', angular.toJson(this.notes));
        };

        NoteFactory.prototype.getById = function (id) {
            return this.notes[id];
        };

        NoteFactory.prototype.remove = function (id) {
            this.notes.splice(id, 1);
            this._sync();
        };

        NoteFactory.prototype.getAll = function () {
            return this.notes;
        };

        return new NoteFactory();
    }
})();