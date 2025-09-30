const document = {
    elements:[
        {
            tag:"head",
            content:"",
            children:[
                {
                    tag:"title",
                    content:"hello world"
                }
            ]
        },
        {
            tag:"body",
            content:"this is the content",
            children:[
                {
                    tag:"div",
                    content:"hello world",
                    children:[

                    ]
                }
            ]
        }
    ],
    getElementContent(tagName){
       const found =  this.elements.find((el)=>{
            return tagName === el.tag
        })

        if(found && found.content){
            return found.content
        }else {
            return found.children
        }
    }
}


const myEl = document.getElementContent("body")

console.log(myEl)