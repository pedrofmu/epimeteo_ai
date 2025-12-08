export type Theme = {
    // the title of the theme (what it is about)
    title: string,
    // people that appear in the history: id -> name
    characters: Record<number, string>,
    // when the theme hapens, it can be null if for example is a description of a person, then its atemporal 
    time?: Date,
    // the content of the theme 
    content: string,
}
