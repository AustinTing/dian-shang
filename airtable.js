require('dotenv').config()
const rp = require('request-promise')

module.exports.read = async ({table, maxRecords, pageSize, sort, offset}) => {
  let option = {
    headers: {
      'Authorization': 'Bearer ' + process.env.AIR_TABLE_API_KEY
    },
    url: `https://api.airtable.com/v0/appnPKeRqCH9LdSus/${table}`,
    qs: {
      maxRecords,
      pageSize,
      sort,
      offset
    },
    json: true
  }
  console.log(option)
  return rp(option)
}
