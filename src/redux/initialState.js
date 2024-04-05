const initialState = {
  posts: [
    {
      id: "1",
      title: "Article title 1",
      shortDescription: "Short description of the article...",
      content: "Main content of the article",
      publishedDate: new Date("01-10-1991"),
      author: "John Doe",
    },
    {
      id: "2",
      title: "Article title 2",
      shortDescription: "Short description of the article...",
      content: "Main content of the article",
      publishedDate: new Date("03-03-1991"),
      author: "John Doe",
    },
    {
      id: "3",
      title: "Article title 3",
      shortDescription: "Short description of the article...",
      content: "Main content of the article",
      publishedDate: new Date("11-09-2001"),
      author: "John Doe",
    },
  ],
  categories: ["Sport", "News", "Movies"],
};

export default initialState;
