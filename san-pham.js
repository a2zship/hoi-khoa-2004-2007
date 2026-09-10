/* =====================================================================
   DANH SÁCH SẢN PHẨM — CHỈ CẦN SỬA FILE NÀY ĐỂ ĐỔI GIÁ & ẢNH
   =====================================================================
   Mỗi sản phẩm là một dòng { ... }. Sửa các phần sau:

   • name  : Tên hiển thị
   • desc  : Mô tả ngắn
   • price : GIÁ (chỉ ghi SỐ, không dấu chấm/đ). VD 150000  = 150.000đ
   • img   : ẢNH. Bỏ ảnh vào thư mục "anh/" rồi ghi tên file ở đây.
             VD  img: "anh/ao-polo.jpg"
             Để trống ("") thì hiện icon vẽ sẵn thay cho ảnh.
   • tag   : Nhãn góc ảnh (VD "Bán chạy"). Không cần thì để ""  hoặc bỏ dòng tag.
   • hide  : true  = tạm ẩn sản phẩm khỏi trang. Bỏ đi hoặc false = hiện.

   ⚠️ Lưu ý gõ đúng: giữ nguyên dấu phẩy cuối mỗi dòng, dấu ngoặc kép quanh chữ.
   Sửa xong LƯU LẠI. (Muốn hiện lên bản demo online thì cần đẩy file này +
   ảnh trong thư mục anh/ lên GitHub — hoặc nhờ trợ lý cập nhật giúp.)
   ===================================================================== */

window.SHOP_PRODUCTS = [
  { id:"ao-polo",  name:"Áo polo",          desc:"Polo trắng phối xanh, thêu logo 20 năm, in được tên lớp.", price:200000, img:"", tag:"Bán chạy" },
  { id:"ao-thun",  name:"Áo thun",          desc:"Áo thun cotton in logo & hình bóng học trò, đủ size.",     price:150000, img:"", tag:"" },
  { id:"mu",       name:"Mũ lưỡi trai",     desc:"Nón kết trắng–xanh thêu biểu tượng hội khóa.",             price:90000,  img:"", tag:"" },
  { id:"binh",     name:"Bình giữ nhiệt",   desc:"Bình giữ nhiệt inox in logo, khắc được tên lớp.",          price:180000, img:"", tag:"" },
  { id:"tui",      name:"Túi vải",          desc:"Túi vải canvas in logo, bền & tiện dùng hằng ngày.",       price:85000,  img:"", tag:"" },
  { id:"moc-khoa", name:"Móc khóa",         desc:"Móc khóa kim loại in logo, khắc được tên & lớp.",          price:45000,  img:"", tag:"" },
  { id:"chuong",   name:"Kỷ niệm chương",   desc:"Kỷ niệm chương pha lê khắc logo 20 năm, đế trang trọng.",  price:250000, img:"", tag:"Sang trọng" },
  { id:"hop-qua",  name:"Hộp quà kỷ niệm",  desc:"Set quà: bình giữ nhiệt + móc khóa + thiệp, đóng hộp đẹp.",price:350000, img:"", tag:"Set quà" }

  // Muốn THÊM sản phẩm mới: copy một dòng ở trên, dán xuống đây, đổi id (không trùng),
  // tên, giá, ảnh. Nhớ thêm dấu phẩy "," ở cuối dòng phía trên.
];

/* Ghi chú kỹ thuật: nếu file này lỗi cú pháp, trang sẽ tự dùng danh sách dự phòng
   để không bị trống. Muốn dùng lại icon vẽ cho một sản phẩm: để img:"" và trang
   sẽ tự chọn icon phù hợp theo id (ao/mu/binh/tui/moc-khoa/chuong/hop-qua). */
window.SHOP_ICON_BY_ID = {
  "ao-polo":"p-shirt", "ao-thun":"p-shirt", "mu":"p-cap", "binh":"p-bottle",
  "tui":"p-tote", "moc-khoa":"p-keychain", "chuong":"p-award", "hop-qua":"i-gift"
};
