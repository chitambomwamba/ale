/*
 * @license
 * Copyright 2018 Cayle Sharrock
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under the License.
 *
 */

const Book = require('../models/book');
const connection = require('../models/connection');

class AleWrapper {
    constructor() {
        this.books = {}
    }
    
    buildBooklist() {
        return Book.listBooks().then(books => {
            books.forEach(book => {
            
            })
        })
    }
    
    getBook(name) {
        return this.books[name];
    }
    
    newBook(name, quoteCurrency) {
        const newBook = new Book(name, quoteCurrency)
    }
}