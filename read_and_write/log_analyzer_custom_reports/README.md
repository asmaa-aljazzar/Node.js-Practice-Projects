# Log Analyzer with Custom Reports

A Node.js project that reads server log files, analyzes requests, and generates a summary report. This project demonstrates file handling, parsing, and data aggregation in real-world log analysis scenarios.

---

## 📌 Purpose

The goal of this project is to practice **reading large files line by line**, **parsing structured data**, and **generating reports** in Node.js using asynchronous operations.

---

## ⚡ Features

- **Parse Log Lines:** Extract IP addresses and requested endpoints from standard log format.  
- **Aggregate Data:** Count occurrences per IP and per endpoint.  
- **Generate Report:** Produce a text file summarizing:
  - Total unique IP addresses  
  - Most common endpoint and its request count  
  - Number of requests per IP  

---

## 🛠 Usage Overview

Run the analyzer by providing the path to a log file:

```bash
node analyzer.js <path-to-log-file>
```
The report will be generated in `report.txt` in the project directory.

---

## 📂 Structure

- **analyzer.js** – Reads the log file line by line, counts requests, and triggers report generation.  
- **parser.js** – Contains the function to parse a single log line and extract IP and endpoint.  
- **report_generator.js** – Aggregates data and writes the final report to a text file.  

---

## 🎯 Goal

This project strengthens understanding of:

- Asynchronous file streaming and reading in Node.js  
- Parsing structured text data with regular expressions  
- Data aggregation and report generation  
- Writing modular code with reusable components
