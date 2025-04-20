import React, { useEffect, useState } from "react";
import { storeDB } from "../../../utility/DB/AddToDB";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBook from "./ReadBook";

const ReadPages = () => {
  const data = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);
  const [sort, setSort] = useState("");
  useEffect(() => {
    const storedBook = storeDB();
    // const convertBook = storedBook.map((id) => parseInt(id));
    const myReadBookList = data.filter((book) =>
      storedBook.includes(book.bookId)
    );
    setReadBooks(myReadBookList);
  }, []);

  const handleSort = (sortType) => {
    setSort(sortType);
    if(sortType === 'Pages'){
        const sortedByPage = [...readBooks].sort((a,b)=> a.totalPages - b.totalPages);
        setReadBooks(sortedByPage);
    }
    if(sortType==='Rating'){
        const sortedByRating = [...readBooks].sort((a,b)=>b.rating - a.rating);
        setReadBooks(sortedByRating);
    }
  };

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read Book</Tab>
          <Tab>Mark Book</Tab>
        </TabList>

        <TabPanel>
          <div className="dropdown dropdown-start">
            <div tabIndex={0} role="button" className="btn m-1">
              <span>Sort By: {sort? sort :'⬇️'}  </span>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a onClick={()=>handleSort('Pages')}>pages</a>
              </li>
              <li>
                <a onClick={()=>handleSort('Rating')}>Rating</a>
              </li>
            </ul>
          </div>
          {readBooks.map((book) => (
            <ReadBook key={book.bookId} book={book}></ReadBook>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Not mark</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadPages;
