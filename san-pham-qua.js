/* =====================================================================
   QUÀ GÂY QUỸ HỘI KHÓA — dữ liệu cho trang qua-gay-quy.html
   Nguồn: "Bang_gia_qua_gay_quy_2026" — sheet "Gia de xuat" (giá bán đề xuất 15/09/2026).
   CHỈ đưa GIÁ BÁN lên web. Giá NCC / vận hành / phần dư là số nội bộ, KHÔNG ghi vào file này.
   File này chỉ dùng cho trang quà gây quỹ — sửa ở đây không ảnh hưởng trang hội khóa hay 20/11.
   =====================================================================
   Mỗi sản phẩm (mỗi QUY CÁCH là 1 dòng riêng, có giá riêng):
     • ma    : Mã theo bảng giá (SP02-B...) — gửi kèm đơn để BTC đối chiếu nhà cung cấp
     • cat   : Dịp — dùng đúng 1 mã trong DANH MỤC bên dưới
     • group : Các quy cách của CÙNG 1 sản phẩm dùng chung group -> gộp thành 1 thẻ có ô chọn quy cách
     • gname : Tên chung của sản phẩm (hiện trên thẻ); name = tên đầy đủ kèm quy cách (hiện trong giỏ/đơn)
     • opt   : Tên quy cách (hiện trong ô chọn)
     • price : GIÁ BÁN (chỉ ghi số)
     • img   : Ảnh trong thư mục anh/
     • tag   : Nhãn góc ảnh; hide:true = tạm ẩn
   ===================================================================== */

window.SHOP_CATEGORIES = [
  { id:"20-11",        label:"20/11 Nhà giáo" },
  { id:"noel",         label:"Noel" },
  { id:"nam-moi",      label:"Năm mới" },
  { id:"tet",          label:"Tết" },
  { id:"doanh-nghiep", label:"Quà doanh nghiệp" }
];

window.SHOP_PRODUCTS = [
  /* ===================== 20/11 NHÀ GIÁO ===================== */
  { ma:"SP02-B", id:"sp02-b", cat:"20-11", name:"Cốc giữ nhiệt 530 ml (in nhiều màu)", opt:"In nhiều màu, kèm hộp",
    desc:"Cốc giữ nhiệt 530 ml kèm hộp, in hoa văn nhiều màu chủ đề tri ân thầy cô.", price:299000, img:"anh/qua-coc-giu-nhiet-530.jpg", tag:"20/11" },
  { ma:"SP07",   id:"sp07",   cat:"20-11", name:"Bút ký kim loại khắc logo",
    desc:"Bút ký thân kim loại, khắc logo. Mua kèm quà khác hoặc đặt theo lô.", price:39000, img:"anh/qua-but-ky.jpg", tag:"" },
  { ma:"SP11-A", id:"sp11-a", cat:"20-11", group:"tui-gia-day", gname:"Túi vải giả đay", name:"Túi vải giả đay (in 1 màu, 2 mặt)", opt:"In 1 màu, 2 mặt",
    desc:"Túi vải giả đay in logo & lời tri ân 20/11. Ảnh minh họa bản in PET nhiều màu.", price:159000, img:"anh/qua-tui-gia-day.jpg", tag:"" },
  { ma:"SP11-B", id:"sp11-b", cat:"20-11", group:"tui-gia-day", gname:"Túi vải giả đay", name:"Túi vải giả đay (in PET nhiều màu)", opt:"In PET nhiều màu",
    desc:"Túi vải giả đay in logo & lời tri ân 20/11. Ảnh minh họa bản in PET nhiều màu.", price:189000, img:"anh/qua-tui-gia-day.jpg", tag:"" },
  /* --- Quà trang trọng: cùng mã & giá với bản gốc, đổi thiết kế in sang chủ đề 20/11 (ảnh demo vẽ lại bằng Canva) --- */
  { ma:"SP12",   id:"sp12-2011", cat:"20-11", name:"Bộ bình giữ nhiệt & cốc sứ (mẫu 20/11)",
    desc:"Bình giữ nhiệt + cốc sứ in hoa văn tri ân thầy cô, đựng trong hộp cứng sang trọng.", price:329000, img:"anh/qua-2011-bo-binh-coc.jpg", tag:"Mẫu 20/11" },
  { ma:"SP10-A", id:"sp10-a-2011", cat:"20-11", group:"am-tra-2011", gname:"Bộ ấm trà sứ (mẫu 20/11)", name:"Bộ ấm trà sứ mẫu 20/11 (in 1 màu)", opt:"In 1 màu",
    desc:"Ấm & chén sứ trắng in hoa văn tri ân, hộp quà lót lụa — món quà truyền thống biếu thầy cô.", price:399000, img:"anh/qua-2011-am-tra.jpg", tag:"Mẫu 20/11" },
  { ma:"SP10-B", id:"sp10-b-2011", cat:"20-11", group:"am-tra-2011", gname:"Bộ ấm trà sứ (mẫu 20/11)", name:"Bộ ấm trà sứ mẫu 20/11 (in thêm 1 màu)", opt:"In thêm 1 màu",
    desc:"Ấm & chén sứ trắng in hoa văn tri ân, hộp quà lót lụa — món quà truyền thống biếu thầy cô.", price:429000, img:"anh/qua-2011-am-tra.jpg", tag:"Mẫu 20/11" },
  { ma:"SP13",   id:"sp13-2011", cat:"20-11", name:"Bộ ô gấp & cốc giữ nhiệt (mẫu 20/11)",
    desc:"Ô gấp + cốc giữ nhiệt in hoa văn tri ân thầy cô, hộp quà dạng sách. Nhận đặt trước.", price:529000, img:"anh/qua-2011-bo-o-coc.jpg", tag:"Đặt trước" },
  { ma:"SP06",   id:"sp06-2011", cat:"20-11", name:"Đồng hồ pha lê (mẫu 20/11)",
    desc:"Đồng hồ để bàn pha lê khắc lời tri ân, kèm hộp — món quà trang trọng cho thầy cô. Nhận đặt trước.", price:649000, img:"anh/qua-2011-dong-ho-pha-le.jpg", tag:"Đặt trước" },

  /* ===================== NOEL ===================== */
  { ma:"SP12",   id:"sp12",   cat:"noel", name:"Bộ bình giữ nhiệt & cốc sứ",
    desc:"Bình giữ nhiệt + cốc sứ in logo, đựng trong hộp cứng sang trọng.", price:329000, img:"anh/qua-bo-binh-coc.jpg", tag:"" },

  /* ===================== NĂM MỚI ===================== */
  { ma:"SP04-B", id:"sp04-b", cat:"nam-moi", name:"Cốc lắc 600 ml in logo",
    desc:"Cốc lắc thể thao 600 ml, in logo hội khóa 1 màu. Hợp quà năm mới, quà thể thao.", price:89000, img:"anh/qua-coc-lac-600.jpg", tag:"" },
  { ma:"SP13",   id:"sp13",   cat:"nam-moi", name:"Bộ ô gấp & cốc giữ nhiệt",
    desc:"Logo trên 2 múi ô, bao ô, cốc giữ nhiệt và hộp quà. Hợp quà năm mới, quà doanh nghiệp.", price:529000, img:"anh/qua-bo-o-coc.jpg", tag:"Đặt trước" },

  /* ===================== TẾT ===================== */
  { ma:"SP03-A", id:"sp03-a", cat:"tet", group:"bo-6-ly", gname:"Bộ 6 ly thủy tinh 220 ml", name:"Bộ 6 ly 220 ml (hộp carton, in 1 màu)", opt:"Hộp carton, in 1 màu",
    desc:"6 ly thủy tinh 220 ml in logo/hoa văn Tết. Ảnh minh họa bản hộp quà.", price:119000, img:"anh/qua-bo-6-ly.jpg", tag:"" },
  { ma:"SP03-C", id:"sp03-c", cat:"tet", group:"bo-6-ly", gname:"Bộ 6 ly thủy tinh 220 ml", name:"Bộ 6 ly 220 ml (hộp carton, in thêm 1 màu)", opt:"Hộp carton, in thêm 1 màu",
    desc:"6 ly thủy tinh 220 ml in logo/hoa văn Tết. Ảnh minh họa bản hộp quà.", price:129000, img:"anh/qua-bo-6-ly.jpg", tag:"" },
  { ma:"SP03-B", id:"sp03-b", cat:"tet", group:"bo-6-ly", gname:"Bộ 6 ly thủy tinh 220 ml", name:"Bộ 6 ly 220 ml (hộp quà, in 1 màu)", opt:"Hộp quà cao cấp, in 1 màu",
    desc:"6 ly thủy tinh 220 ml in logo/hoa văn Tết. Ảnh minh họa bản hộp quà.", price:159000, img:"anh/qua-bo-6-ly.jpg", tag:"" },
  { ma:"SP09",   id:"sp09",   cat:"tet", name:"Đồng hồ treo tường 27 × 27 cm",
    desc:"In logo trên mặt đồng hồ nền trắng, kèm hộp xách. Hợp quà Tết, quà gia đình.", price:139000, img:"anh/qua-dong-ho-treo.jpg", tag:"" },
  { ma:"SP10-A", id:"sp10-a", cat:"tet", group:"am-tra", gname:"Bộ ấm trà sứ", name:"Bộ ấm trà sứ (in 1 màu)", opt:"In 1 màu",
    desc:"Ấm & chén sứ trắng in logo, hộp quà lót lụa. Ảnh minh họa bản in 1 màu.", price:399000, img:"anh/qua-am-tra.jpg", tag:"" },
  { ma:"SP10-B", id:"sp10-b", cat:"tet", group:"am-tra", gname:"Bộ ấm trà sứ", name:"Bộ ấm trà sứ (in thêm 1 màu)", opt:"In thêm 1 màu",
    desc:"Ấm & chén sứ trắng in logo, hộp quà lót lụa. Ảnh minh họa bản in 1 màu.", price:429000, img:"anh/qua-am-tra.jpg", tag:"" },

  /* ===================== QUÀ DOANH NGHIỆP ===================== */
  { ma:"SP01-B", id:"sp01-b", cat:"doanh-nghiep", name:"Mũ lưỡi trai vải kaki",
    desc:"Mũ vải kaki in/thêu logo. Giá chưa gồm phí logo nếu phát sinh.", price:109000, img:"anh/qua-mu-kaki.jpg", tag:"" },
  { ma:"SP06",   id:"sp06",   cat:"doanh-nghiep", name:"Đồng hồ pha lê kèm hộp",
    desc:"Đồng hồ để bàn pha lê in logo 1 màu, kèm hộp. Món quà trang trọng.", price:649000, img:"anh/qua-dong-ho-pha-le.jpg", tag:"Đặt trước" }

  // Thêm quy cách mới: copy 1 dòng, đổi ma + id (không trùng), giữ cùng group nếu là cùng sản phẩm.
];

/* Icon dự phòng khi ảnh lỗi */
window.SHOP_ICON_BY_ID = {
  "sp02-b":"p-mug","sp07":"p-book","sp11-a":"p-tote","sp11-b":"p-tote","sp12":"p-bottle",
  "sp04-b":"p-bottle","sp13":"i-gift","sp03-a":"p-mug","sp03-b":"p-mug","sp03-c":"p-mug",
  "sp09":"p-calendar","sp10-a":"p-mug","sp10-b":"p-mug","sp01-b":"p-cap","sp06":"p-award",
  "sp12-2011":"p-bottle","sp10-a-2011":"p-mug","sp10-b-2011":"p-mug","sp13-2011":"i-gift","sp06-2011":"p-award"
};
