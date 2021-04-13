import React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead
} from "@material-ui/core"

import MainLayout from "../../components/MainLayout"

import { useStyles } from "./styles"
// ---

export default function Dashboard({ dashboardData }) {
  const { attributes } = dashboardData
  let results, status, stats
  const fetchResults = []
  if (attributes && attributes.results) {
    ({stats, status} = attributes)
    results = dashboardData.attributes.results
  }
  if (results) {
    Object.keys(results).forEach(key => fetchResults.push(results[key]))
  }

  const getCellStyle = category => {
    if (category === "undetected") return { color: "green" }
    if (category === "malicious") return { color: "red" }
    if (category === "timeout") return { color: "blue" }
    if (category === "suspicious") return { color: "magenta" }
  }

  const classes = useStyles()
  return (
    <MainLayout activeMenuItem="/dashboard">
      <div className={classes.container}>
        {attributes && (<div>Status: {status}</div>)}
        {attributes && (<div>Stats:
          <span> harmless - {stats.harmless}</span>,
          <span style={{ color: "red" }}> malicious - {stats.malicious}</span>,
          <span style={{ color: "magenta" }}> suspicious - {stats.malicious}</span>,
          <span style={{ color: "green" }}> undetected - {stats.undetected}</span>,
          <span style={{ color: "blue" }}> timeout - {stats.timeout}</span>
        </div>)}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }} align="center">Engine name</TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="center">Category</TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="center">Method</TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="center">Result</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fetchResults.length ? fetchResults.map((row, index) => {
                return (
                  <TableRow hover tabIndex={-1} key={index}>
                    <TableCell align="center">{row.engine_name}</TableCell>
                    <TableCell
                      align="center"
                      style={getCellStyle(row.category)}
                    >
                      {row.category}
                    </TableCell>
                    <TableCell align="center">{row.method}</TableCell>
                    <TableCell align="center">{row.result}</TableCell>
                  </TableRow>
                )
              }) : (
                <TableRow>
                  <TableCell align="center" colSpan={4}>
                    {status === "queued"
                      ? "Please repeat checking after 15 seconds"
                      : "No results here"
                    }
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </MainLayout>
  )
}
