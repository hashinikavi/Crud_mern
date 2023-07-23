const express = require('express');
const Posts = require('../models/posts');


const router = express.Router();

//save posts

router.post('/post/save', (req,res)=>{

    let newPost = new Posts(req.body);

   
    newPost.save()
    .then(() => {
        return res.status(200).json({
            success: "Post saved successfully"
        });
    })
    .catch(err => {
        return res.status(400).json({
            error: err
        });
    });
});

//get post

router.get('/posts', (req,res) =>{
    Posts.find()
    .then((posts) =>{
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    })
    .catch(err => {
        return res.status(400).json({
            error:err
        });
    })
});

//update posts need to change

router.put('/post/update/:id', (req,res) =>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        })
        .then(post =>{
            return res.status(200).json({
                success : "updated successfully"
            });
        })

        .catch(err =>{
            return res.status(400).json({error:err});
        });
});

//delete post

router.delete('/post/delete/:id', (req, res) => {
    Posts.findByIdAndRemove(req.params.id)
        .then(deletePost => {
            return res.json({
                message: "Delete successful",
                deletePost
            });
        })
        .catch(err => {
            return res.status(400).json({
                message: "Delete unsuccessful",
                err
            });
        });
});


module.exports = router;

