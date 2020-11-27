import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
        'Bearer iNwS1SOrd8BfeHOy1fnakIfwGYJws14E0kQ34P7ecapJzr56SQjQJTiCwPyJgVZKDxDW3qpBVwM4DJNKQYc2FZ5U92uw1wN8Hfiav1l6_kxoKdCDBTtU0BKxSayGX3Yx'
    },
});