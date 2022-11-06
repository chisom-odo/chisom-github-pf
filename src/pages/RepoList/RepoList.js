import React, { useState, useEffect, useMemo } from "react";
import "./RepoList.css";
import Navigation from "../../Components/navigation/Navigation";
import Card from "../../Components/card/Card";
import axios from "axios";
import { UsersFooter } from "../../Components/UsersFooter";
import { getPageNumber } from "../../utils/getPageNumber";
import { useSearchParams } from "react-router-dom";

const RepoList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [params] = useSearchParams();
  const pageNumber = useMemo(() => getPageNumber(params), [params]);

  const getData = async (page) => {
    const { data } = await axios.get(
      `https://api.github.com/users/chisom6924536/repos`
    );
    console.log(data);
    if (page > 1 || data.length > 0) {
      setData((prev) => [...prev, ...data]);
    } else {
      setData(data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (!data.length && pageNumber !== 1) {
      // go to data page if no data
      window.location.href = "/data";
    }

    if (data.length / 4 < pageNumber) {
      getData(pageNumber);
    }
  }, [pageNumber, data.length]);

  const getCurrentPageData = (pageNumber) => {
    const startIndex = (pageNumber - 1) * 4;
    const endIndex = startIndex + 4;
    return data.slice(startIndex, endIndex);
  };

  const currentPageData = getCurrentPageData(pageNumber);
  const pageDataExists = currentPageData.length > 0;

  if (!pageDataExists && !isLoading) {
    return <div className="error">No data found</div>;
  }

  if (isLoading) {
    return (
      <div className="loading">
        Please wait, your request is being processed....
      </div>
    );
  }

  return (
    <>
      <div className="repos">
        <Navigation />
        <div className="repos-content">
          <h3>chisom69264536's Repo-List</h3>
          <div className="repo-list">
            <Card repos={getCurrentPageData(pageNumber)} />
          </div>
          <UsersFooter pageNumber={pageNumber} />
        </div>
      </div>
    </>
  );
};

export default RepoList;
