function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}const t=require("axios");module.exports=new class{async store(s,a={}){const o=await t.post("/vapor/signed-storage-url",{bucket:a.bucket||"",content_type:a.contentType||s.type,expires:a.expires||"",visibility:a.visibility||""},e({baseURL:a.baseURL||null,headers:a.headers||{}},a.options));let r=o.data.headers;"Host"in r&&delete r.Host,void 0===a.progress&&(a.progress=()=>{});const n=a.cancelToken||"";return await t.put(o.data.url,s,{cancelToken:n,headers:r,onUploadProgress:e=>{a.progress(e.loaded/e.total)}}),o.data.extension=s.name.split(".").pop(),o.data}};
//# sourceMappingURL=laravel-vapor.modern.js.map