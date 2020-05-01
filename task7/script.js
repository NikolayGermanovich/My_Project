class TwPosts {
    posts = [];


    validatePost(post){
        if ((typeof(post.id) == "undefined") || (typeof(post.description) == "undefined")
        || (typeof(post.createdAt) == "undefined") || (typeof(post.author) == "undefined") ||
         (typeof(post.photoLink) == "undefined")) return false; else return true;
    };

    addPost(post){
        if (this.validatePost(post)){
            if (posts.push(post)) return true; else return false;
        }
    };

    removePost(id){
        let checkR = false;
        posts.forEach((element, ind) => {
            if (element.id == id) {
                 posts.splice(ind, 1);
                 checkR=true;
    }
    });
        if (checkR) return true; else return false;
    };

    getPost(id){
return (posts.filter(card => card.id == id));
    };


  getPosts(skip = 0, top = 10, filterConfig = ''){

     var db = posts;
     var db_result=[];
     db.sort((a, b) => a.createdAt > b.createdAt ? 1 : -1);
    //console.log(db);

     var count=0;
     db.forEach((element, ind) => {
       if ((ind >= skip) && (count < top)) {
         if (filterConfig === ''){
            //console.log(element);
            db_result.push(element);
            count++;
         } else {
             if ((typeof(filterConfig.createdAt) != "undefined") || (typeof(filterConfig.author)  != "undefined")){
                if((element.createdAt === filterConfig.createdAt) || (element.author === filterConfig.author)){

            db_result.push(element);
            count++;
             }
        }
         };
      }
    });
    return (db_result);
  
}
}
