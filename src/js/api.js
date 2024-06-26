const api = {
    "comics" : [],
    "genre"  : [
        { name: "Tất cả"},{ name: "Action"},{ name: "Adult"},{ name: "Adventure"},{ name: "Big Brain"},{ name: "Chuyển Sinh"},{ name: "Comedy"},
        { name: "Comic"},{ name: "Cooking"},{ name: "Cổ Đại"},{ name: "Doujinshi"},{ name: "Drama"},{ name: "Ecchi"},{ name: "Fantasy"},{ name: "Family"},
        { name: "Harem"},{ name: "Historical"},{ name: "Horror"},{ name: "Josei"},{ name: "Live action"},{ name: "Manga"},{ name: "Manhua"},
        { name: "Manhwa"},{ name: "Martial Arts"},{ name: "Mature"},{ name: "Mecha"},{ name: "Mystery"},{ name: "Ngôn Tình"},{ name: "One shot"},
        { name: "Psychological"},{ name: "Romance"},{ name: "School Life"},{ name: "Sci-fi"},{ name: "Seinen"},{ name: "Shoujo"},{ name: "Shoujo Ai"},
        { name: "Shounen"},{ name: "Shounen Ai"},{ name: "Slice of Life"},{ name: "Smut"},{ name: "Soft Yaoi"},{ name: "Soft Yuri"},{ name: "Sports"},
        { name: "Supernatural"},{ name: "Tragedy"},{ name: "Trinh Thám"},{ name: "Truyện scan"},{ name: "Truyện Màu"},{ name: "Webtoon"},
        { name: "Xuyên Không"},{ name: "Hệ thống"}
    ],
    "genres"  : [
        {nameGenre: "Tất cả", desGenre: "Bao gồm tất cả các thể loại truyện tranh"},
        {nameGenre: "Action", desGenre: "Truyện tranh mang nội dung chính về những cuộc chiến đánh nhau, bạo lực,... diễn biến nhanh."},
        {nameGenre: "Adventure", desGenre: "Thể loại phiêu lưu, mạo hiểm, thường là hành trình của các nhân vật."},
        {nameGenre: "Big Brain", desGenre: "Truyện tranh có những nhân vật chính suy nghĩ nhạy bén, thông minh, dùng mưu trí."},
        {nameGenre: "Chuyển Sinh", desGenre: "Unknown"},
        {nameGenre: "Comedy", desGenre: "Còn gọi là “Humor”. Thể loại có các tình tiết gây cười, các xung đột nhẹ nhàng nhưng tạo được tiếng cười nơi độc giả, vài bộ còn mang chất “bựa” rất cao."},
        {nameGenre: "Comic", desGenre: "Unknown"},
        {nameGenre: "Cooking", desGenre: "Thể loại truyện tranh nói về đồ ăn, cách nhân vật nấu và  chế biến món ăn."},
        {nameGenre: "Cổ Đại", desGenre: "Unknown"},
        {nameGenre: "Doujinshi", desGenre: "Hay “Fanfiction”. Thể loại truyện phóng tác do fan hay có thể cả những Mangaka khác với tác giả truyện gốc. Tác giả vẽ Doujinshi thường dựa trên những nhân vật gốc để viết ra những câu chuyện theo sở thích của mình"},
        {nameGenre: "Drama", desGenre: "Có tính kịch. Thể loại mang đến cho người xem những cảm xúc khác nhau: buồn bã, căng thẳng thậm chí là bi phẫn."},
        {nameGenre: "Ecchi", desGenre: "Thể loại xuất phát từ việc tác giả vẽ truyện lôi cuốn, kích thích hơi hướng dành cho người lớn."},
        {nameGenre: "Fantasy", desGenre: "Thể loại xuất phát từ trí tưởng tượng phong phú, từ pháp thuật đến thế giới trong mơ thậm chí là những câu chuyện thần tiên."},
        {nameGenre: "Family", desGenre: "Thể loại nói về tình cảm gia đình, xung quanh các thành viên trong gia đình."},
        {nameGenre: "Harem", desGenre: "Thể loại truyện tình cảm, lãng mạn mà trong đó, nhiều nhân vật nữ thích một nam nhân vật chính."},
        {nameGenre: "Historical", desGenre: "Thể loại có liên quan đến thời xa xưa."},
        {nameGenre: "Horror", desGenre: "Horror = rùng rợn, nghe cái tên là bạn đã hiểu thể loại này có nội dung thế nào. Nó làm cho bạn kinh hãi, khiếp sợ, ghê tởm, run rẩy, có thể gây sock – một thể loại không dành cho người yếu tim."},
        {nameGenre: "Komodo", desGenre: "Kodomo manga là thể loại dành cho trẻ em dưới 10 tuổi. Kodomo manga thường có nội dung đơn giản, vui nhộn, có tính giáo dục cao và thể hiện tinh thần lạc quan. Nhân vật chính trong kodomo manga thường là trẻ em hoặc động vật, có tính cách ngây thơ, tốt bụng và năng động."},
        {nameGenre: "Josei", desGenre: "Josei manga là thể loại dành cho độc giả là nữ giới trẻ và trưởng thành từ khoảng 18 tuổi đến 45 tuổi, được đăng trên những tạp chí josei như You hay Be Love. Josei manga thường tập trung vào thể hiện cảm xúc, suy nghĩ của nữ giới trong các phương diện như cuộc sống hàng ngày, tình yêu, gia đình, sự nghiệp, xã hội."},
        {nameGenre: "Manga", desGenre: "Những câu truyện đến từ xứ sở 'Hoa anh đào'- Nhật Bản."},
        {nameGenre: "Manhua", desGenre:"Những câu truyện đến từ người bạn láng giềng- Trung Quốc."},
        {nameGenre: "Manhwa", desGenre: "Những câu truyện đến từ xứ sở 'Kim Chi'- Hàn Quốc."},
        {nameGenre: "Martial Arts", desGenre: "Thể loại võ thuật chiến đấu, từ các trận đánh nhau, tự vệ đến các môn võ thuật như akido, karate, judo hay taekwondo, kendo, các cách né tránh."},
        {nameGenre: "Mature", desGenre: "Unknown"},
        {nameGenre: "Mecha", desGenre: "Mecha, còn được biết đến dưới cái tên meka hay mechs, là thể loại nói tới những cỗ máy biết đi (thường là do phi công cầm lái)."},
        {nameGenre: "Mystery", desGenre: "Cũng gọi là “Suirin”. Thể loại thường xuất hiện những điều bí ấn không thể lí giải được và sau đó là những nỗ lực của nhân vật chính nhằm tìm ra câu trả lời thỏa đáng."},
        {nameGenre: "Ngôn Tình", desGenre: "Unknown"},
        {nameGenre: "One shot", desGenre: "Những truyện ngắn, thường là 1 chapter."},
        {nameGenre: "Psychological", desGenre: "Thể loại liên quan đến những vấn đề về tâm lý của nhân vật (tâm thần bất ổn, điên cuồng …)"},
        {nameGenre: "Romance", desGenre:"Thường là những câu chuyện về tình yêu. Ở đây chúng ta sẽ lấy ví dụ như tình yêu giữa một người con trai và con gái, bên cạnh đó đặc điểm thể loại này là kích thích trí tưởng tượng của bạn về tình yêu."},
        {nameGenre: "School Life", desGenre: "Trong thể loại này, ngữ cảnh diễn biến câu chuyện chủ yếu ở trường học."},
        {nameGenre: "Sci-fi", desGenre: "Bao gồm những chuyện khoa học viễn tưởng, đa phần chúng xoay quanh nhiều hiện tượng mà liên quan tới khoa học, công nghệ, tuy vậy thường thì những câu chuyện đó không gắn bó chặt chẽ với các thành tựu khoa học hiện thời, mà là do con người tưởng tượng ra."},
        {nameGenre: "Seinen", desGenre: " Seinen manga là thể loại dành cho độc giả là nam giới trẻ và trưởng thành từ khoảng 18 tuổi đến 40 tuổi."},
        {nameGenre: "Shoujo", desGenre: "Shoujo manga là thể loại dành cho độc giả là những cô gái vị thành niên, được đăng trên những tạp chí shoujo. Shoujo manga thường tập trung vào các mối quan hệ lãng mạn cũng như các cung bậc cảm xúc, xoay quanh nhân vật chính thường gặp nhất là nữ. "},
        {nameGenre: "Shounen", desGenre: "Shounen manga là thể loại dành cho độc giả nam giới thanh thiếu niên. Shounen manga thường có nhiều chi tiết hành động, phiêu lưu, chiến đấu, thể thao, hài hước và nêu cao tình bạn. Nhân vật chính trong shounen manga thường là nam, có tính cách nhiệt huyết, quyết đoán và có khát vọng lớn"},
        {nameGenre: "Shounen Ai", desGenre: "Thể loại quan hệ hoặc liên quan tới đồng tính nữ, thể hiện trong các mối quan hệ trên mức bình thường giữa các nhân vật nữ trong các manga."},
        {nameGenre: "Slice of Life", desGenre: "Thể loại nói về cuộc sống đời thường."},
        {nameGenre: "Soft Yaoi", desGenre: "Unknown"},
        {nameGenre: "Soft Yuri", desGenre: "Unknown"},
        {nameGenre: "Sports", desGenre: "Đúng như tên gọi, những môn thể thao "},
        {nameGenre: "Supernatural", desGenre: "Thể hiện những sức mạnh đáng kinh ngạc và không thể giải thích được, chúng thường đi kèm với những sự kiện trái ngược hoặc thách thức với những định luật vật lý."},
        {nameGenre: "Tragedy", desGenre: "Tragedy"},
        {nameGenre: "Trinh Thám", desGenre: "Thám"},
        {nameGenre: "Truyện scan", desGenre: "scan"},
        {nameGenre: "Truyện Màu", desGenre: "Như tên gọi, truyện này là những câu chuyện được tô màu."},
        {nameGenre: "Tragedy", desGenre: "Thể loại chứa đựng những sự kiện mà dẫn đến kết cục là những mất mát hay sự rủi ro to lớn."},
        {nameGenre: "Webtoon", desGenre: "Các truyện tranh mạng Hàn Quốc, là một loại hình truyện tranh số có nguồn gốc từ Hàn Quốc."},
        {nameGenre: "Xuyên Không", desGenre: "Giống thể loại Isekai của Manga. Nhân vật chính được đưa đến những chiều không gian mới lạ những nơi xa xôi khác với hiện tại, một thế giới kỳ bí và huyền diệu."},
        {nameGenre: "Hệ thống", desGenre: "Hệ thống"},
        {nameGenre: "Mạt Thế", desGenre: "Nhưngz bộ truyện lấy ý tưởng về ngày tận thế của loài người và toàn bộ sinh vật trên Trái Đất. Ở đó toàn bộ trái đất sẽ dần đến diệt vong bởi một loại virus, hoặc một bệnh dịch, hay những sinh vật đến từ thế giới khác."},
        {nameGenre: "Huyền Huyễn", desGenre: "Tương tự như Fantasy trong Manga, huyền huyễn được hiểu là những truyện có yếu tố kỳ ảo, phép thuật với bối cảnh không có thật như thế giới thần tiên, thế giới yêu ma."},
        {nameGenre: "Tiên Hiệp", desGenre: "Truyện tiên hiệp là thể loại truyện tu luyên thành tiên của Trung Quốc. Con đường thành tiên luôn rất trắc trở và nhiều chông gai. Để thành tiên thì các tu sĩ phải vượt qua nhiều khó khăn, nghịch cả thiên ý để thành tiên."},
        {nameGenre: "Kiếm Hiệp", desGenre: "Truyện kiếm hiệp có thể hiểu là thể loại truyện nói về các soái ca, sư tỷ hành tẩu trong giang hồ với võ nghệ cao cường, đồng thời có thể nhắc tới các ân oán của các môn phái trong thiên hạ."},
    ],
    "web": [
        // Danh sach website truyen chu-------------------------------------
    {linkComic: 'https://comics24hmoi.com/', 
        nameWebsite: 'comics24h', genreWebsite: "truyenchu"},
    {linkComic: 'https://congtruyen.org', 
        nameWebsite: 'congtruyen', genreWebsite: "truyenchu"},
    {linkComic: 'https://sstruyen.vn/', 
        nameWebsite: 'sstruyen', genreWebsite: "truyenchu"},
    {linkComic: 'https://truyenfull.vn/', 
        nameWebsite: 'truyenfull', genreWebsite: "truyenchu"},
    {linkComic: 'https://trumtruyen.vn/', 
        nameWebsite: 'trumtruyen', genreWebsite: "truyenchu"},
    {linkComic: 'https://thichtruyen.vn/', 
        nameWebsite: 'thichtruyen', genreWebsite: "truyenchu"},
    {linkComic: 'https://truyenchu.vn/', 
        nameWebsite: 'truyenchu', genreWebsite: "truyenchu"},
    {linkComic: 'https://truyenyy.pro/', 
        nameWebsite: 'truyenyy', genreWebsite: "truyenchu"},
        // Danh sach website truyen tranh-----------------------------------
    {linkComic: 'https://truyenqqvn.com', 
        nameWebsite: 'truyenqq', genreWebsite: "truyentranh"},
    {linkComic: 'https://www.a3manga.store/', 
        nameWebsite: 'a3manga', genreWebsite: "truyentranh"},
    {linkComic: 'https://www.nettruyenss.com', 
        nameWebsite: 'nettruyen', genreWebsite: "truyentranh"},
    {linkComic: 'https://baotangtruyen8.com', 
        nameWebsite: 'baotangtruyen', genreWebsite: "truyentranh"},
    {linkComic: 'https://thichdoctruyen.vip', 
        nameWebsite: 'thichdoctruyen', genreWebsite: "truyentranh"},
    {linkComic: 'https://wattpad.vn/', 
        nameWebsite: 'wattpad', genreWebsite: "truyentranh"},
    {linkComic: 'https://goctruyentranhvui1.com', 
        nameWebsite: 'goctruyentranh', genreWebsite: "truyentranh"},
    {linkComic: 'https://manga.io.vn', 
        nameWebsite: 'manga.io', genreWebsite: "truyentranh"},
    {linkComic: 'https://timtruyen3ss.com/', 
        nameWebsite: 'timtruyen3s', genreWebsite: "truyentranh"},
    {linkComic: 'https://blogtruyenmoi.com/', 
        nameWebsite: 'blogtruyen', genreWebsite: "truyentranh"},
    {linkComic: 'https://www.tamtruyen.com/',
        nameWebsite: 'tamtruyen', genreWebsite: "truyentranh"},
    {linkComic: 'https://nhattruyenbing.com/',
        nameWebsite: 'nhattruyen', genreWebsite: "truyentranh"},
    {linkComic: 'https://truyentranh18.vn/',
        nameWebsite: 'truyentranh18', genreWebsite: "truyentranh"},
    {linkComic: 'https://truyenbest.com/',
        nameWebsite: 'truyenbest', genreWebsite: "truyentranh"},
    {linkComic: 'https://acomicshot.com/',
        nameWebsite: 'acomics', genreWebsite: "truyentranh"},
    {linkComic: 'https://abtruyen.com/',
        nameWebsite: 'abtruyen', genreWebsite: "truyentranh"},
    {linkComic: 'https://tctruyen.com/',
        nameWebsite: 'tctruyen', genreWebsite: "truyentranh"},
    {linkComic: 'https://manhuavn.top/',
        nameWebsite: 'manhuavn', genreWebsite: "truyentranh"},
    {linkComic: 'https://tuoitho.mobi/',
        nameWebsite: 'tuoitho', genreWebsite: "truyentranh"},
    {linkComic: 'http://truyendoc.info/',
        nameWebsite: 'truyendoc', genreWebsite: "truyentranh"},
    {linkComic: 'https://doctruyentranh.net.vn/',
        nameWebsite: 'doctruyentranh', genreWebsite: "truyentranh"},
    {linkComic: 'http://alotruyentranh.com/',
        nameWebsite: 'alotruyentranh', genreWebsite: "truyentranh"},
    // Danh sach website truyen tranh18-----------------------------------
    // {linkComic: 'https://truyenvn.fun/',
    //     nameWebsite: 'truyenvn', genreWebsite: "truyentranh18"},
    // {linkComic: 'https://truyen18.xyz/',
    //     nameWebsite: 'truyen18.xyz', genreWebsite: "truyentranh18"},  
    // {linkComic: 'https://damconuong.net/',
    //     nameWebsite: 'damconuong', genreWebsite: "truyentranh18"},
    // {linkComic: 'https://doctruyen3qc.com/',
    //     nameWebsite: 'doctruyen3q', genreWebsite: "truyentranh18"},
    // {linkComic: 'https://truyentranhs.com/',
    //     nameWebsite: 'truyentranhs.com', genreWebsite: "truyentranh18"},
    // {linkComic: 'https://truyengihotqua.com/',
    //     nameWebsite: 'truyengihot', genreWebsite: "truyentranh18"},
    // {linkComic: 'https://hentai24h.tv/',
    //     nameWebsite: 'hentai24h', genreWebsite: "truyentranh18"},
    // {linkComic: 'https://truyengihotqua.com/',
    //     nameWebsite: 'truyengihot', genreWebsite: "truyentranh18"},
    // {linkComic: 'https://hentaivv1.com/',
    //     nameWebsite: 'hentaivv', genreWebsite: "truyentranh18"},
    // Danh sach website truyen tranh nuoc ngoai--------------------------
    
    ]
}
let websiteComic = [
        // Danh sach website truyen chu-------------------------------------
    {linkComic: 'https://comics24hmoi.com/', 
        nameWebsite: 'comics24h', genreWebsite: "truyenchu"},
    {linkComic: 'https://congtruyen.org', 
        nameWebsite: 'congtruyen', genreWebsite: "truyenchu"},
    {linkComic: 'https://sstruyen.vn/', 
        nameWebsite: 'sstruyen', genreWebsite: "truyenchu"},
    {linkComic: 'https://truyenfull.vn/', 
        nameWebsite: 'truyenfull', genreWebsite: "truyenchu"},
    {linkComic: 'https://trumtruyen.vn/', 
        nameWebsite: 'trumtruyen', genreWebsite: "truyenchu"},
    {linkComic: 'https://thichtruyen.vn/', 
        nameWebsite: 'thichtruyen', genreWebsite: "truyenchu"},
    {linkComic: 'https://truyenchu.vn/', 
        nameWebsite: 'truyenchu', genreWebsite: "truyenchu"},
    {linkComic: 'https://truyenyy.pro/', 
        nameWebsite: 'truyenyy', genreWebsite: "truyenchu"},
        // Danh sach website truyen tranh-----------------------------------
    {linkComic: 'https://truyenqqvn.com', 
        nameWebsite: 'truyenqq', genreWebsite: "truyentranh"},
    {linkComic: 'https://www.a3manga.store/', 
        nameWebsite: 'a3manga', genreWebsite: "truyentranh"},
    {linkComic: 'https://www.nettruyenss.com', 
        nameWebsite: 'nettruyen', genreWebsite: "truyentranh"},
    {linkComic: 'https://baotangtruyen8.com', 
        nameWebsite: 'baotangtruyen', genreWebsite: "truyentranh"},
    {linkComic: 'https://thichdoctruyen.vip', 
        nameWebsite: 'thichdoctruyen', genreWebsite: "truyentranh"},
    {linkComic: 'https://wattpad.vn/', 
        nameWebsite: 'wattpad', genreWebsite: "truyentranh"},
    {linkComic: 'https://goctruyentranhvui1.com', 
        nameWebsite: 'goctruyentranh', genreWebsite: "truyentranh"},
    {linkComic: 'https://manga.io.vn', 
        nameWebsite: 'manga.io', genreWebsite: "truyentranh"},
    {linkComic: 'https://timtruyen3ss.com/', 
        nameWebsite: 'timtruyen3s', genreWebsite: "truyentranh"},
    {linkComic: 'https://blogtruyenmoi.com/', 
        nameWebsite: 'blogtruyen', genreWebsite: "truyentranh"},
    {linkComic: 'https://www.tamtruyen.com/',
        nameWebsite: 'tamtruyen', genreWebsite: "truyentranh"},
    {linkComic: 'https://nhattruyenbing.com/',
        nameWebsite: 'nhattruyen', genreWebsite: "truyentranh"},
    {linkComic: 'https://truyentranh18.vn/',
        nameWebsite: 'truyentranh18', genreWebsite: "truyentranh"},
    {linkComic: 'https://truyenbest.com/',
        nameWebsite: 'truyenbest', genreWebsite: "truyentranh"},
    {linkComic: 'https://acomicshot.com/',
        nameWebsite: 'acomics', genreWebsite: "truyentranh"},
    {linkComic: 'https://abtruyen.com/',
        nameWebsite: 'abtruyen', genreWebsite: "truyentranh"},
    {linkComic: 'https://tctruyen.com/',
        nameWebsite: 'tctruyen', genreWebsite: "truyentranh"},
    {linkComic: 'https://manhuavn.top/',
        nameWebsite: 'manhuavn', genreWebsite: "truyentranh"},
    {linkComic: 'https://tuoitho.mobi/',
        nameWebsite: 'tuoitho', genreWebsite: "truyentranh"},
    {linkComic: 'http://truyendoc.info/',
        nameWebsite: 'truyendoc', genreWebsite: "truyentranh"},
    {linkComic: 'https://doctruyentranh.net.vn/',
        nameWebsite: 'doctruyentranh', genreWebsite: "truyentranh"},
    {linkComic: 'http://alotruyentranh.com/',
        nameWebsite: 'alotruyentranh', genreWebsite: "truyentranh"},
    // Danh sach website truyen tranh18-----------------------------------
    {linkComic: 'https://truyenvn.fun/',
        nameWebsite: 'truyenvn', genreWebsite: "truyentranh18"},
    {linkComic: 'https://truyen18.xyz/',
        nameWebsite: 'truyen18.xyz', genreWebsite: "truyentranh18"},  
    {linkComic: 'https://damconuong.net/',
        nameWebsite: 'damconuong', genreWebsite: "truyentranh18"},
    {linkComic: 'https://doctruyen3qc.com/',
        nameWebsite: 'doctruyen3q', genreWebsite: "truyentranh18"},
    {linkComic: 'https://truyentranhs.com/',
        nameWebsite: 'truyentranhs.com', genreWebsite: "truyentranh18"},
    {linkComic: 'https://truyengihotqua.com/',
        nameWebsite: 'truyengihot', genreWebsite: "truyentranh18"},
    {linkComic: 'https://hentai24h.tv/',
        nameWebsite: 'hentai24h', genreWebsite: "truyentranh18"},
    {linkComic: 'https://truyengihotqua.com/',
        nameWebsite: 'truyengihot', genreWebsite: "truyentranh18"},
    {linkComic: 'https://hentaivv1.com/',
        nameWebsite: 'hentaivv', genreWebsite: "truyentranh18"},
    // Danh sach website truyen tranh nuoc ngoai--------------------------
    
]
export {api, websiteComic}






