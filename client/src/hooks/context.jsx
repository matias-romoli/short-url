import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

//content
export const functionContext = createContext();
export const appContext = createContext();

export const FunctionContextProvider = ({ children }) => {
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (setRes, setUrl, values, resetForm) => {
    if (!values.data.trim()) {
      return toast.error("Input cannot be empty.");
    }

    try {
      const res = await fetch(import.meta.env.VITE_POST, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: values.data }),
      });
      if (res.status === 404) {
        const data = await res.json();
        toast.error(data);
        setRes(data);
        resetForm();
      }

      setUrl(await res.json());
      resetForm();
    } catch (error) {
      return error;
    }
  };
  const copyClipboard = (text) => {
    navigator.clipboard.writeText("http://localhost:8080/" + text);
    toast.success("Text copied!");
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <functionContext.Provider
      value={{ handleSubmit, copyClipboard, copied, setCopied }}
    >
      {children}
    </functionContext.Provider>
  );
};
export const AppContextProvider = ({ children }) => {
  const [res, setRes] = useState("");
  const [url, setUrl] = useState([]);

  return (
    <appContext.Provider value={{ res, setRes, url, setUrl }}>
      {children}
    </appContext.Provider>
  );
};
