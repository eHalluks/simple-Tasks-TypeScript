/*

    TASK: 6 (#fundamentals)

    DESCRIPTION: cut a link and next, remove all

    TODO: 1# Add types to the program.
    TODO: 2# Fix errors at the designated location.
    TODO: 3# Write an interface that fully describes the Bookmarks class, and then make the Bookmarks class implement that interface.
    TODO: 4# Do not change anything in the class except for the types!

 */


interface BookmarksInterface {
    list: string[];
    first(): string | undefined;
    last(): string | undefined;
    add(url: string): void;
    remove(urlOrAll: string | true): void;
}


class Bookmarks implements BookmarksInterface {

    list: string[];

    constructor(list: string[]) {
        this.list = list;
    }

    first(): string | undefined {
        return this.list[0];
    }

    last(): string | undefined {
        return this.list[this.list.length - 1];
    }

    add(url: string): void {
        this.list.push(url);
    }

    remove(urlOrAll: string | true): void {
        if (urlOrAll === true) {
            this.list = [];
        } else {
            this.list = this.list.filter(bookmark => bookmark !== urlOrAll);
        }
    }
}
function createLink(bookmark: string | undefined): string {

    if(!bookmark){
        return '';
    }else{
        return `<a href="${bookmark}">${bookmark.substring(bookmark.indexOf('//')+2)}</a>`;
    }

}

const favorites = new Bookmarks([]);

favorites.add('http://wp.pl');
console.log(createLink(favorites.first()));
favorites.remove('http://wp.pl');
console.log(createLink(favorites.first()));
favorites.add('http://wp.pl');
favorites.add('http://onet.pl');
favorites.remove(true);
console.log('This should be true if list is empty', !favorites.first());