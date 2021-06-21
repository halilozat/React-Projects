## Change Category Redux Operations = () =>{

# 1. aşama : action type'ları belirliyoruz.

# 2. aşama : category ile ilgili aksiyonları changeCategory içinde gönderilen parametreyi redux'un anlayacağı bir objeye çeviriyoruz.  => (type'in, payload'in ...'dir şekilde)

# 3. aşama : changeCategoryReducer içerisinde gelen aksiyona göre hangi aksiyonsa, onun payload'ını 'state' olarak dönüyoruz.

# 4. aşama : reducers/index'te bütün reducer'larımızı bir araya getiriyoruz.

# 5. aşama : configureStore içerisinde bir fonksiyon vasıtasıyla uygulamamızda bir store kullanmak istiyoruz, store rootReducer içeriyor diyoruz.

# 6. aşama : uygulamanın index'i içerisinde componentlerimize redux yeteneği getiriyoruz.

# 7. aşama : son oalrak CategoryList içerisine connect'i ekliyoruz.     (redux store'a bağlantı)

}

# state = 'bir component'e ait data'
# props = property, 'bir componentten diğerine veri taşıma'  (readOnly)
# 

