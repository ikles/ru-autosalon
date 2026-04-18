function p(){return[...arguments].map(e=>e?.replace(/_/g," ").replace(/\b\w/g,a=>a.toUpperCase())).join(" ")}export{p as c};
