import{ak as V,al as j,am as E,Q as I,an as G,u as z,G as F,r as o,c as W,a as D,E as J}from"#entry";import{a as Q,u as q,m as U}from"./_ghbtMGw.js";import{c as l}from"./BjXA453h.js";function K(p){const a=p||j();return a?.ssrContext?.head||a?.runWithContext(()=>{if(E())return I(G)})}function X(p,a={}){const e=K(a.nuxt);if(e)return V(p,{head:e,...a})}const ae={__name:"SEO",setup(p){const a=z(),e=Q(),t=q(),n=F(),d=o(""),r=o("");function B(){try{let y=function(i){return i==null?"":i.replaceAll("%brand_name_rus%",u.value?u.value:g.value).replaceAll("%model_name_eng%",_.value?_.value:v.value).replaceAll("%generation_name_rus%",h.value?h.value:"").replaceAll("%generation_name_eng%",h.value?h.value:"").replaceAll("%brand_name_eng%",g.value?g.value:u.value).replaceAll("%model_name_rus%",v.value?v.value:_.value).replaceAll("%car_id%",s.value).replaceAll("%generation_minprice%",U(N.value)).replaceAll("%car_minprice%",U(f.value)).replaceAll("%site_name_eng%",a.siteName).replaceAll("%site_name_rus%",a.siteName).replaceAll("%site_credit_percent%",a.creditPercent).replaceAll("%modification_name_eng%",w.value).replaceAll("%modification_name_rus%",b.value).replaceAll("%complectation_name_eng%",R.value).replaceAll("%complectation_name_rus%",A.value)};const s=o(""),f=o(""),u=o(""),g=o(""),v=o(""),_=o(""),x=o(""),h=o(""),N=o(""),w=o(""),b=o(""),R=o(""),A=o(""),k=i=>{const S=i.split("/").filter(c=>c!==""),m=[];let P="";return S.forEach((c,$)=>{P+=`/${c}`;const O=T(c);m.push({"@type":"ListItem",position:$,name:O,item:{"@type":"Thing","@id":P}})}),m.length>=0&&(m.unshift({"@type":"ListItem",position:0,name:"Главная",item:{"@type":"Thing","@id":"/"}}),m.forEach((c,$)=>{c.position=$+1})),m},T=i=>({credit:"Кредит",leasing:"Лизинг",installment:"Рассрочка","trade-in":"Trade-in",contact:"Контакты",redemption:"Выкуп",politics:"Политика конфиденциальности","cars-new":"Каталог новых автомобилей","cars-used":"Каталог автомобилей c пробегом",cars:"Каталог автомобилей",banks:"Банки-партнеры",sales:"Акции",favorites:"Избранное",reviews:"Отзывы",comparison:"Сравнение",favorites:"Избранное",about:"О компании"})[i]||i.charAt(0).toUpperCase()+i.slice(1),L=o(`     
            {
                "@context": "http://schema.org",
                "@type": "AutoDealer",
                "telephone": "${a.phone}",
                "name": "${a.siteName}",
                "url": "${a.siteUrl}",
                "logo": "/svg/logo.svg",
                "image": "/og.png",
                "description": "${a.newSeo.index.description}",
                "openingHours": "Mo, Tu, We, Th, Fr, Sa, Su 09:00-20:00",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "${a.address}",
                    "addressLocality": "${a.siteCity}",
                    "addressRegion": "${a.siteCity}",
                    "postalCode": "",
                    "addressCountry": {
                        "@type": "Country",
                        "name": "Россия"
                    }
                },
                "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "Shop",
                    "telephone": "${a.phone}"
                }
            }
`),M=o(`
            {
                "@context": "http://schema.org",
                "@type": "Organization",
                "url": "${a.siteUrl}",
                "name": "${a.siteName}",
                "sponsor": {
                    "@type": "Organization",
                    "url": "${a.siteUrl}",
                    "name": "${a.siteName}"
                }
            }`),H=o(JSON.stringify({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:k(n.path)})),C=J(()=>{if(n.name=="car")return`{
            "@context": "http://schema.org",
            "@type": "Product",
            "name": "${e.car?.brand} ${e.car?.model} ${e.car?.modification?.modification} ${e.car?.complectation?.complectation} id: ${e.car?.id}",
            "image": "${e.car?.preview}",
            "description": "${l(r.value)}",
            "sku": "${e.car?.id}",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "3"
            },
            "review": [
                {
                    "@type": "Review",
                    "author": {
                        "@type": "Person",
                        "name": "Gosha"
                        },
                    "datePublished": "2024-3-25",
                    "reviewBody": "Купил у данного продавца ${e.car?.brand} ${e.car?.model} ${e.car?.modification?.modification} ${e.car?.complectation?.complectation}. Езжу уже пару недель, машина работает без нареканий, работает так, как и обещали ее тех. характеристик и менеджеры салона. К слову о менеджерах. Их работа мне понравилась, парни знают свое дело. Отдельную благодарность хочу выразить Кириллу, который помог мне не только с выбором авто и комплектации, но и вел переговоры с руководством автосалона, чтобы мне сделали скидочку) Цена автомобиля полностью себя оправдывает. Рад, что купил авто именно здесь.",
                    "reviewRating": {
                    "@type": "Rating",
                    "bestRating": "5",
                    "ratingValue": "5",
                    "worstRating": "5"
                    }
                },
                {
                    "@type": "Review",
                    "author": {
                        "@type": "Person",
                        "name": "Maksim"
                        },
                    "datePublished": "2024-05-22",
                    "reviewBody": "Месяц назад купила себе ${e.car?.brand} ${e.car?.model} ${e.car?.modification?.modification} ${e.car?.complectation?.complectation}. Машиной довольна, цена оправдывает свои ожидания. Перед покупкой разговаривала с менеджером, он помог зарезервировать такую красотку. Сотрудники обращаются доброжелательно и выполняют свою работу профессионально. Рекомендую.",
                    "reviewRating": {
                    "@type": "Rating",
                    "bestRating": "5",
                    "ratingValue": "5",
                    "worstRating": "5"
                    }
                },
                {
                    "@type": "Review",
                    "author": {
                        "@type": "Person",
                        "name": "Sasha"
                        },
                    "datePublished": "2024-06-19",
                    "reviewBody": "Выбирал автомобиль ${e.car?.brand} ${e.car?.model} ${e.car?.modification?.modification} ${e.car?.complectation?.complectation} жене. Встретили доброжелательно. Менеджеры профессионалы своего дела. Выбрал, как и мечтала жена. Проконсультировали во всём, рассказали плюсы и минусы машины. Оформили довольно быстро. Жена счастлива. Автосалон один из лучших по городу (субъективно, конечно же).",
                    "reviewRating": {
                    "@type": "Rating",
                    "bestRating": "5",
                    "ratingValue": "5",
                    "worstRating": "5"
                    }
                }
            ],
            "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "RUB",
                "lowPrice": "${e.car.price-e.car?.sale}",
                "highPrice": "${e.car.price}",
                "offerCount": "1",
                "availability": "https://schema.org/InStock",
                "itemCondition": "https://schema.org/NewCondition"
                },
            "brand": {
                "@type": "brand",
                "name": "${e.car.brand}"
            }
        }
        `;if(n.name=="model")return`{
            "@context": "http://schema.org",
            "@type": "Product",
            "name": "${t.model.model} ${t.model.brand} ${t.model?.modifications[0].modification} ${t.model?.modifications[0].car_complectations[0].complectation}",
            "image": "${t.model?.preview?t.model.preview:t.model.galleries[0].url}",
            "sku": "${t.model.id}",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "3"
            },
            "review": [
                {
                    "@type": "Review",
                    "author": {
                        "@type": "Person",
                        "name": "Gosha"
                        },
                    "datePublished": "2024-3-25",
                    "reviewBody": "Купил у данного продавца ${t.model.model} ${t.model.brand} ${t.model?.modifications[0].modification} ${t.model?.modifications[0].car_complectations[0].complectation}. Езжу уже пару недель, машина работает без нареканий, работает так, как и обещали ее тех. характеристик и менеджеры салона. К слову о менеджерах. Их работа мне понравилась, парни знают свое дело. Отдельную благодарность хочу выразить Кириллу, который помог мне не только с выбором авто и комплектации, но и вел переговоры с руководством автосалона, чтобы мне сделали скидочку) Цена автомобиля полностью себя оправдывает. Рад, что купил авто именно здесь.",
                    "reviewRating": {
                    "@type": "Rating",
                    "bestRating": "5",
                    "ratingValue": "5",
                    "worstRating": "5"
                    }
                },
                {
                    "@type": "Review",
                    "author": {
                        "@type": "Person",
                        "name": "Maksim"
                        },
                    "datePublished": "2024-05-22",
                    "reviewBody": "Месяц назад купила себе ${t.model.model} ${t.model.brand} ${t.model?.modifications[0].modification} ${t.model?.modifications[0].car_complectations[0].complectation}. Машиной довольна, цена оправдывает свои ожидания. Перед покупкой разговаривала с менеджером, он помог зарезервировать такую красотку. Сотрудники обращаются доброжелательно и выполняют свою работу профессионально. Рекомендую.",
                    "reviewRating": {
                    "@type": "Rating",
                    "bestRating": "5",
                    "ratingValue": "5",
                    "worstRating": "5"
                    }
                },
                {
                    "@type": "Review",
                    "author": {
                        "@type": "Person",
                        "name": "Sasha"
                        },
                    "datePublished": "2024-06-19",
                    "reviewBody": "Выбирал автомобиль ${t.model.model} ${t.model.brand} ${t.model?.modifications[0].modification} ${t.model?.modifications[0].car_complectations[0].complectation} жене. Встретили доброжелательно. Менеджеры профессионалы своего дела. Выбрал, как и мечтала жена. Проконсультировали во всём, рассказали плюсы и минусы машины. Оформили довольно быстро. Жена счастлива. Автосалон один из лучших по городу (субъективно, конечно же).",
                    "reviewRating": {
                    "@type": "Rating",
                    "bestRating": "5",
                    "ratingValue": "5",
                    "worstRating": "5"
                    }
                }
            ],
            "description": "${l(r.value)}",
            "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "RUB",
                "lowPrice": "${t.model.min_price}",
                "highPrice": "${t.model.min_price+t.model?.sale}",
                "offerCount": "${t.model.cars_count>0?t.model.cars_count:1}",
                "availability": "https://schema.org/InStock",
                "itemCondition": "https://schema.org/NewCondition"
            }
        },
        "brand": {
                "@type": "brand",
                "name": "${t.model.brand}"
            }
        `});n.path.includes("cars")?(u.value=n.params.brand?a.newBrands.find(i=>i.url_brand===n.params.brand)?.ru_brand?.toUpperCase():"",g.value=n.params.brand?a.newBrands.find(i=>i.url_brand===n.params.brand)?.brand?.toUpperCase():"",v.value=n.params.model?n.params.model?.toUpperCase():"",_.value=n.params.model?n.params.model?.toUpperCase():"",x.value=n.params.model?t.model?.min_price:"",s.value=n.params.car?e.car.id:"",f.value=n.params.car?e.car.price-e.car.sale:"",w.value=n.params.car?e.car?.modification?.modification:"",b.value=n.params.car?e.car?.modification?.modification:"",R.value=n.params.car?e.car?.complectation?.complectation:"",A.value=n.params.car?e.car?.complectation?.complectation:"",d.value=y(a.newSeo[n.name]?.title),r.value=y(a.newSeo[n.name]?.description)):(d.value=y(a.newSeo[n.name]?.title),r.value=y(a.newSeo[n.name]?.description)),X({title:l(d.value),meta:[{name:"description",content:l(r.value)},{property:"og:type",content:"website"},{property:"og:title",content:l(d.value)},{property:"og:description",content:l(r.value)},{property:"og:url",content:`${a.siteUrl}${n.path}`},{property:"og:image",content:`${a.siteUrl}/og.png`},{property:"og:locale",content:"ru_RU"},{property:"og:site_name",content:a.siteName}],link:[{rel:"canonical",href:`${a.siteUrl}${n.path}`}],script:[{type:"application/ld+json",innerHTML:M.value},{type:"application/ld+json",innerHTML:L.value},{type:"application/ld+json",innerHTML:H.value},...C.value?[{type:"application/ld+json",innerHTML:C.value}]:[]]})}catch(s){console.log(s)}}return B(),(s,f)=>(D(),W("div"))}};export{ae as _,X as u};
