import {addNewList, getAllLists} from '../controllers/inputController';

const inputRoutes = (app) => {
    app.route('/input')
    .get(getAllLists)
    .post(addNewList);
}

export default inputRoutes;