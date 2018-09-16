const airtable = require('./airtable')

const test = async () => {
  const result = await airtable.read({
    table: 'Furniture',
    maxRecords: '5',
    pageSize: 3,
    sort: [{field: 'Name', direction: 'desc'}]
  })
  const {records} = result
  // console.log(JSON.stringify(result))
  console.log(result)
  console.log(records[0].fields.Name)
  console.log(records[1].fields.Name)
  console.log(records[2].fields.Name)
}

test()
