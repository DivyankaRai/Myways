var _ = require('lodash')
var async = require('async')
var axios = require('axios')
const fs = require('fs');


// async.parallel([
//      function(callback) {
//         axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
//             callback(null,res.data);
//         }).catch((er)=>{
//             callback(null, 'one',er)
//         })
//     },
//     function(callback) {
//         axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
//             // fs.writeFileSync("./data.json", JSON.stringify(res.data));
//             callback(null, 'one',JSON.stringify(res.data));
//         }).catch((er)=>{
//             callback(null, 'one',er)
//         })
//     },
//     function(callback) {
//         axios.get('https://jsonplaceholder.typicode.com/comments').then((res)=>{
//             callback(null, 'one',res.data);
//         }).catch((er)=>{
//             callback(null, 'one',er)
//         })
//     },
// ], function(err,results) {
//     console.log(err,results)
// });
// const arr = []

async.auto({
    get_usersdata: function(callback) {
        axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
            // arr.push(res.data)
            callback(null, res.data);
        }).catch((er)=>{
            callback(null,er)
        })
    },
    get_postsdata: function(callback) {
        // async code to get some data
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
            // arr.push(res.data)
            callback(null, res.data);
        }).catch((er)=>{
            callback(null,er)
        })
    },
    get_commentsdata: function(callback) {
        // async code to get some data
        axios.get('https://jsonplaceholder.typicode.com/comments').then((res)=>{
            // arr.push(res.data)
            callback(null, res.data);
        }).catch((er)=>{
            callback(null,er)
        })
    },
    // write_file: ['get_usersdata', 'get_postsdata', 'get_commentsdata', function(results, callback) {
    //     const array = []
    //     const arr = _.concat(array, results.get_usersdata, results.get_postsdata, results.get_postsdata)
    //     callback(null,arr);
    // }],
}, function(err, results) {
    if (err) {
        console.log('err = ', err);
    }
    // const res = JSON.stringify(results.write_file)
    fs.writeFileSync("./data.json", JSON.stringify(results));
    console.log('results = ', results);
    // fs.writeFileSync("./data.json", results.get_usersdata);
});
