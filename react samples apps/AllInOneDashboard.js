import React, { useEffect, useState } from "react";

//topics:
//Paginated API Fetch
//Live Search
//Debouncing
//Auto-Refreshing Data

const AllInOneDashboard = () => {
  const [query, setQuery] = useState(""); // Live search input
  const [debouncedQuery, setDebouncedQuery] = useState(""); // Debounced query
  const [data, setData] = useState([]); // Fetched data
  const [page, setPage] = useState(1); // Pagination
  const [lastUpdated, setLastUpdated] = useState(null); // Auto-refresh timestamp

  const PAGE_SIZE = 5;

  // Debouncing input (runs 500ms after user stops typing)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
      setPage(1); // Reset to page 1 on search
    }, 500);

    return () => clearTimeout(handler); // Cleanup previous timer
  }, [query]);

  // Fetch data on mount, debouncedQuery change, or page change
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = debouncedQuery
          ? `https://jsonplaceholder.typicode.com/users?name_like=${debouncedQuery}`
          : `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${PAGE_SIZE}`;

        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLastUpdated(new Date().toLocaleTimeString());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Initial fetch

    const interval = setInterval(() => {
      fetchData(); // Auto-refresh every 10 seconds
    }, 10000);

    return () => clearInterval(interval); // Cleanup on unmount or rerender
  }, [debouncedQuery, page]);

  // Pagination handlers
  const handleNextPage = () => setPage((prev) => prev + 1);
  const handlePrevPage = () => setPage((prev) => Math.max(1, prev - 1));

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>📊 All-in-One React Dashboard</h2>

      {/* 🔍 Search input */}
      <input
        type="text"
        placeholder="Search users by name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "8px", width: "300px", marginBottom: "10px" }}
      />

      <p><strong>Last Updated:</strong> {lastUpdated}</p>

      {/* 📝 Data list */}
      <ul>
        {data.length === 0 && <li>No results found.</li>}
        {data.map((item) => (
          <li key={item.id}><strong>{item.name || item.title}</strong></li>
        ))}
      </ul>

      {/* 📄 Pagination (disabled during search) */}
      {!debouncedQuery && (
        <div style={{ marginTop: "10px" }}>
          <button onClick={handlePrevPage} disabled={page === 1}>◀ Previous</button>
          <span style={{ margin: "0 10px" }}>Page {page}</span>
          <button onClick={handleNextPage}>Next ▶</button>
        </div>
      )}
    </div>
  );
};

export default AllInOneDashboard;
