import con from '../db/index.js'
import { generateJWT, verifyJWT } from '../utils/jwt'


//------------ save ----------------------
export const create = (req, res) => {
    const token = generateJWT({ id: 1 })
    // console.log("token controller", token)
    // console.log("verify token controller", verifyJWT(token))
    console.log("root controller work::");
    res.send({ message: 'root controller work::', token, verifytoken: verifyJWT(token) })
}

//------------ get all list ----------------------
export const getAll = (req, res) => {
    const query = `select * from user`
    con.query(query).then(data => {
        console.log("userList::", data[0].length)
        if (data[0].length >= 1) {
            res.send({ data: data[0], message: 'data get succesfully', status: true })
        }
        else {
            res.send({ data: [], message: 'Data Not Found', status: false })
        }
    }, error => {
        console.log("Data Not Found::", error);
        res.send({ data: [], message: 'Data not found', status: false, error: error })
    }).catch(err => {
        console.log("Data Not Found: catch::", err)
        res.send({ data: [], message: 'Some error :', status: false, error: err })
    })
}

//----------------------- login method -------------------
export const login = (req, res) => {
    const { id, emailId } = req.body;
    if (id && emailId) {
        const query = `select * from user where id=? and emailId=?`;
        con.query(query, [id, emailId]).then(data => {
            if (data[0].length >= 1) {
                res.send({ data: data[0], message: 'login successfully', status: true })
            }
            else {
                res.send({ data: [], message: 'Id & Password not match', status: false })
            }
        }, error => {
            res.send({ data: [], message: 'Id & Password not match', status: false, error: error })
        }).catch(err => {
            res.send({ data: [], message: 'Some error occur:', status: false, error: err })
        })
    }
    else {
        res.send({ data: [], message: 'id and EmailId is required', status: false })
    }
}

//------------- update data --------------------
export const update = (req, res) => {
    console.log("body:::", req.body)
    // res.send({ data: req.body })
    const { u_name, id, emailId, phone } = req.body;
    if (id) {
        const query = `update user set u_name='${u_name}', emailId='${emailId}', phone='${phone}' where id=${id}`
        con.query(query).then(obj => {
            res.send({ message: 'updated succesfully', data: obj, status: true })
        }, error => {
            res.send({ message: 'some error occur', data: [], status: false, error: error })
        }).catch(err => {
            res.send({ message: 'some error occur', data: [], status: false, error: err })
        })
    }
    else {
        res.send({ message: 'Token not match', data: [], status: false, })
    }
}