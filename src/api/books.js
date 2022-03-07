import axios from "axios";
export default {
  saveNewBook: (book) => {
    return axios.post(`${process.env.BACKEND_URL}/api/books/add-new-book`, book, {
      withCredentials: true,
    });
  },
  getAllBooks: () => {
    return axios.get(`${process.env.BACKEND_URL}/api/books/all`, {
      withCredentials: true,
    });
  },
  getAvailableBooks: () => {
    return axios.get(`${process.env.BACKEND_URL}/api/books/available`, {
      withCredentials: true,
    });
  },
  incrementBookCount: (id) => {
    return axios.put(
      `${process.env.BACKEND_URL}/api/books/increment-book-count/${id}`,
      {
        withCredentials: true,
      }
    );
  },
  decrementBookCount: (id) => {
    return axios.put(
      `${process.env.BACKEND_URL}/api/books/decrement-book-count/${id}`,
      {
        withCredentials: true,
      }
    );
  },
  deleteBook: (id) => {
    return axios.delete(`${process.env.BACKEND_URL}/api/books/${id}`, {
      withCredentials: true,
    });
  },
  getRecommendations: (id) => {
    return axios.get(`${process.env.BACKEND_URL}/api/books/recommendations`, {
      withCredentials: true,
    });
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
    return axios.get(`${process.env.BACKEND_URL}/api/books/search?${str}`, {
      withCredentials: true,
    });
  },
  issueBook:(id)=>{
    return axios.post(`${process.env.BACKEND_URL}api/books/issue/${id}`, {
      widthCredentials: true,
    });
  }
};
