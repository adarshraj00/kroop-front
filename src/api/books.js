import axios from "axios";
export default {
  saveNewBook: (book) => {
    return axios.post(
      `https://book-management0.herokuapp.com/api/books/add-new-book`,
      book,
      {
        withCredentials: true,
      }
    );
  },
  getAllBooks: () => {
    return axios.get(`https://book-management0.herokuapp.com/api/books/all`, {
      withCredentials: true,
    });
  },
  getAvailableBooks: () => {
    return axios.get(
      `https://book-management0.herokuapp.com/api/books/available`,
      {
        withCredentials: true,
      }
    );
  },
  incrementBookCount: (id) => {
    return axios.put(
      `https://book-management0.herokuapp.com/api/books/increment-book-count/${id}`,
      {
        withCredentials: true,
      }
    );
  },
  decrementBookCount: (id) => {
    return axios.put(
      `https://book-management0.herokuapp.com/api/books/decrement-book-count/${id}`,
      {
        withCredentials: true,
      }
    );
  },
  deleteBook: (id) => {
    return axios.delete(
      `https://book-management0.herokuapp.com/api/books/${id}`,
      {
        withCredentials: true,
      }
    );
  },
  getRecommendations: (id) => {
    return axios.get(
      `https://book-management0.herokuapp.com/api/books/recommendations`,
      {
        withCredentials: true,
      }
    );
  },
  getSearchResults: ({author, title, startYear, endYear}) => {
    let str = "";
    if (author.length > 0) {
      str += "author=" + author + "&";
    }
    if (title.length > 0) {
      str += "title=" + title + "&";
    }
    if (startYear > 0) {
      str += "startYear=" + startYear + "&";
    }
    if (endYear > 0) {
      str += "endYear=" + endYear;
    }
    console.log(str)
    return axios.get(
      `https://book-management0.herokuapp.com/api/books/search?${str}`,
      {
        withCredentials: true,
      }
    );
  },
  issueBook:(id)=>{
    return axios.post(
      `https://book-management0.herokuapp.comapi/books/issue/${id}`,
      {
        widthCredentials: true,
      }
    );
  }
};
