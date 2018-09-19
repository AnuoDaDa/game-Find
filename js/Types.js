function Types() {
    //创建图片类型
    var type;
    //图片创建数量
    this.typeNum;
    //图片创建类型
    this.typeContext;
    //图片类型显示
    this.typeName;
    // 所有图片中各类型的数量的数组初始化
    this.types=[
        {type:"clock",name:"闹钟",num:0},
        {type:"people",name:"人物",num:0},
        {type:"animal",name:"动物",num:0},
        {type:"plate",name:"盘子",num:0},
        {type:"plant",name:"植物",num:0},
        {type:"money",name:"钱",num:0},
        {type:"letter",name:"字母",num:0},
        {type:"number",name:"数字",num:0},
        {type:"cup",name:"杯子",num:0},
        {type:"fruit",name:"水果",num:0},
        {type:"umbrella",name:"伞",num:0},
        {type:"vehicle",name:"交通工具",num:0},
        {type:"clothe",name:"服饰",num:0}
    ]

    this.init=function (game) {
        //图片类型提示初始化
        type=document.createElement('h2');
        type.style.color="#fff";
        // 设置位置
        type.style.position="absolute";
        type.style.left=130+"px";
        type.style.top=-20+"px";
        game.appendChild(type);
    }

    // 图片类型提示显示内容
    this.reTypeNum=function () {
        type.innerHTML=this.typeNum+this.typeName;
    }

    this.randomTips=function () {
        var random = Math.floor(Math.random() * 13);
        for(var i=0;i<13;i++){
            if(random==i&&this.types[i].num>0){
                this.typeContext = this.types[i].type;
                // 设置类型的数量不超过页面存在同类型图片的数量
                this.typeNum = Math.ceil(Math.random()*this.types[i].num);
                this.typeName=this.types[i].name;
            }
        }
    }
}