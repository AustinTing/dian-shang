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

// const test = async () => {
//   const result = await airtable.read({
//     table: 'Furniture',
//     maxRecords: '5',
//     pageSize: 3,
//     sort: [{field: 'Name', direction: 'desc'}]
//   })
//   const {records} = result
//   // console.log(JSON.stringify(result))
//   console.log(result)
//   console.log(records[0].fields.Name)
//   console.log(records[1].fields.Name)
//   console.log(records[2].fields.Name)
// }

// test()
