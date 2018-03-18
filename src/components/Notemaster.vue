<template>
    <div>
        <b-container fluid class="nm-form-container">
            <b-row>
                <b-col sm="3"><label :for="'title'">Title</label></b-col>
                <b-col sm="9"><b-form-input id="title" v-model="note.title"></b-form-input></b-col>
            </b-row>
            <b-row>
                <b-col sm="3"><label :for="'text'">Text</label></b-col>
                <b-col sm="9"><b-form-input id="text" v-model="note.text"></b-form-input></b-col>
            </b-row>
        </b-container>
        <b-button :size="'lg'" :variant="'primary'" @click="addNote()">
            Add note
        </b-button>
        <b-card-group>
            <b-card v-for="(noteObj, index) of notes" :title-tag="'card-title'" v-bind:key="noteObj.title"
                    style="max-width: 20rem;" class="mb-2">
                <div class="card-title">
                    {{ noteObj.title }}
                    <b-button :size="'sm'" :variant="'default'" @click="removeNote(index)" class="card-close">&times;</b-button>
                </div>
                <p class="card-text">{{ noteObj.text }}</p>
                <div slot="footer">
                    <small class="text-muted">Added on: {{ noteObj.date }}</small>
                </div>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: 'Notemaster',
    data () {
        return {
            note: null,
            notes: [
                { title: 'My first note', text: 'Here is some content', date: moment().format('YYYY-MM-DD HH:mm:ss'), },
            ],
        };
    },
    methods: {
        addNote () {
            const { text, title, } = this.note;
            this.notes.push({ text, title, date: moment().format('YYYY-MM-DD HH:mm:ss'), });
            this.resetNote();
        },
        removeNote (index) {
            this.notes.splice(index, 1);
        },
        resetNote () {
            this.note = { title: '', text: '', };
        },
    },
    created () {
        this.resetNote();
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .nm-form-container > .row {
        margin: 10px;
    }

    .card {
        display: inline-flex;
        margin: 10px;
    }

    .card-close {
        float: right;
    }
</style>
