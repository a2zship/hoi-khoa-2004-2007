/* =====================================================================
   SẢN PHẨM QUÀ 20/11 — TRANG BÁN ĐỘC LẬP (cua-hang-2011.html)
   File này CHỈ dùng cho trang 20/11. Sửa ở đây KHÔNG ảnh hưởng trang hội khóa.
   =====================================================================
   Mỗi sản phẩm:
     • cat   : Nhóm hàng — dùng đúng 1 mã trong DANH MỤC bên dưới
     • name  : Tên hiển thị
     • desc  : Mô tả ngắn
     • price : GIÁ (chỉ ghi SỐ). VD 150000 = 150.000đ
     • img   : ẢNH — bỏ ảnh vào thư mục anh/ rồi ghi tên, VD "anh/hoa-2011.jpg".
               Để trống ("") sẽ hiện icon vẽ sẵn (trang vẫn hiển thị sản phẩm).
     • tag   : Nhãn góc ảnh (VD "Bán chạy"); để "" nếu không cần.
     • variant:"ao" -> cho khách chọn Mẫu Nam/Nữ + Size (kèm bảng hướng dẫn size).
     • hide  : true = tạm ẩn khỏi trang.
   ===================================================================== */

/* DANH MỤC (tab lọc) — thêm/bớt/đổi tên tại đây */
window.SHOP_CATEGORIES = [
  { id:"hoa-thiep", label:"Hoa & Thiệp" },
  { id:"coc-qua",   label:"Cốc & Quà tặng" },
  { id:"combo",     label:"Set quà tri ân" }
];

window.SHOP_PRODUCTS = [
  { id:"nv-hoa",   cat:"hoa-thiep", name:"Bó hoa tri ân thầy cô", desc:"Bó hoa tươi kèm thiệp lời chúc 20/11, gói sang trọng.",     price:150000, img:"", tag:"Bán chạy" },
  { id:"nv-thiep", cat:"hoa-thiep", name:"Thiệp 20/11 (bộ 10)",   desc:"Bộ thiệp chúc mừng Ngày Nhà giáo, in tên lớp/khóa.",       price:50000,  img:"", tag:"" },
  { id:"nv-coc",   cat:"coc-qua",   name:"Cốc sứ tri ân",         desc:"Cốc sứ in lời chúc, khắc được tên thầy cô.",              price:90000,  img:"", tag:"" },
  { id:"nv-binh",  cat:"coc-qua",   name:"Bình giữ nhiệt khắc tên",desc:"Bình giữ nhiệt inox, khắc tên & lời tri ân thầy cô.",     price:180000, img:"", tag:"" },
  { id:"nv-but",   cat:"coc-qua",   name:"Bộ bút khắc tên",       desc:"Bút ký cao cấp, khắc tên thầy cô, hộp quà lịch sự.",       price:120000, img:"", tag:"" },
  { id:"nv-qua",   cat:"combo",     name:"Set quà tri ân thầy cô", desc:"Set quà: bình giữ nhiệt + thiệp + hoa lụa, đóng hộp đẹp.", price:250000, img:"", tag:"Set quà" }

  // Thêm sản phẩm: copy một dòng, đổi id (không trùng), đặt đúng cat.
];

/* Icon vẽ sẵn theo id (dùng khi img để trống). id mới -> mặc định "i-gift". */
window.SHOP_ICON_BY_ID = {
  "nv-hoa":"p-flower","nv-thiep":"p-book","nv-coc":"p-mug",
  "nv-binh":"p-bottle","nv-but":"p-book","nv-qua":"i-gift"
};
