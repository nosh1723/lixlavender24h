import React from 'react'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <header className='px-8 w-full flex justify-center'>
                <div>
                    <img src="logo.png.png" alt="" className='w-32' />
                </div>
                <div>
                    <div className='flex gap-3 justify-end items-center'>
                        <a href="" className='uppercase'>Liên hệ</a>
                        <a href="" className='uppercase px-2 py-[1px] bg-blue-400 text-white'>Mua ngay</a>
                    </div>
                    <nav className='flex gap-3'>
                        <a href="" className='uppercase'>Trang chủ</a>
                        <a href="" className='uppercase'>Doanh nghiệp</a>
                        <a href="" className='uppercase'>Sản phẩm mới</a>
                        <a href="" className='uppercase'>Truyền thông</a>
                        <a href="" className='uppercase'>Tuyển dụng</a>
                    </nav>
                </div>
            </header>

            <main>
                <div className=''>
                    <img src="thumb_5.jpg" alt="" />
                </div>

                {/* <div className='mt-16 bg-blue-600 flex justify-center px-52 py-6 text-white'>
                    <p className='text-center'>Lixco Không ngừng cải tiến và sáng tạo ra những sản phẩm chất lượng cao với giá thành hợp lý cho xã hội. <br />
                    Đáp ứng nhu cầu sử dụng, được khách hàng tin dùng chúng tôi gắn liền với một số nhãn hiệu được ưa chuộng như: Bột giặt Lix, <br /> Nước giặt Lix, Nước rửa chén Lix,Nước xả vải Lix...</p>
                </div> */}

                <div className='px-72 mt-20 flex gap-4 flex-wrap justify-center'>
                    <div className='w-[200px] flex flex-col justify-between pb-6 border-b-2 border-solid border-gray-400'>
                        <div>
                        <div className='w-24 h-4 bg-red-500 text-white flex justify-center items-center'>Mới</div>
                        <img src="bot.jpg" alt="" className='bg-contain'/>
                        </div>
                        <div className='flex gap-2'>
                            <a href="#" className='px-2 py-[1px] bg-red-400 text-white'>Mua</a>
                            <a href="#" className='px-2 py-[1px]  bg-blue-400 text-white'>Thêm giỏ hàng</a>
                        </div>
                    </div>
                    <div className='w-[200px] flex flex-col justify-between pb-6 border-b-2 border-solid border-gray-400'>
                        <img src="1.jpeg" alt="" className='bg-contain'/>
                        <div className='flex gap-2'>
                            <a href="#" className='px-2 py-[1px] bg-red-400 text-white'>Mua</a>
                            <a href="#" className='px-2 py-[1px]  bg-blue-400 text-white'>Thêm giỏ hàng</a>
                        </div>
                    </div>
                    <div className='w-[200px] flex flex-col justify-between pb-6 border-b-2 border-solid border-gray-400'>
                        <img src="10.png" alt="" className='bg-contain'/>
                        <div className='flex gap-2'>
                            <a href="#" className='px-2 py-[1px] bg-red-400 text-white'>Mua</a>
                            <a href="#" className='px-2 py-[1px]  bg-blue-400 text-white'>Thêm giỏ hàng</a>
                        </div>
                    </div>
                    <div className='w-[200px] flex flex-col justify-between pb-6 border-b-2 border-solid border-gray-400'>
                        <img src="13.png" alt="" className='bg-contain'/>
                        <div className='flex gap-2'>
                            <a href="#" className='px-2 py-[1px] bg-red-400 text-white'>Mua</a>
                            <a href="#" className='px-2 py-[1px]  bg-blue-400 text-white'>Thêm giỏ hàng</a>
                        </div>
                    </div>
                    <div className='w-[200px] flex flex-col justify-between pb-6 border-b-2 border-solid border-gray-400'>
                        <img src="34.png" alt="" className='bg-contain'/>
                        <div className='flex gap-2'>
                            <a href="#" className='px-2 py-[1px] bg-red-400 text-white'>Mua</a>
                            <a href="#" className='px-2 py-[1px]  bg-blue-400 text-white'>Thêm giỏ hàng</a>
                        </div>
                    </div>
                    <div className='w-[200px] flex flex-col justify-between pb-6 border-b-2 border-solid border-gray-400'>
                        <img src="129.png" alt="" className='bg-contain'/>
                        <div className='flex gap-2'>
                            <a href="#" className='px-2 py-[1px] bg-red-400 text-white'>Mua</a>
                            <a href="#" className='px-2 py-[1px]  bg-blue-400 text-white'>Thêm giỏ hàng</a>
                        </div>
                    </div>
                    <div className='w-[200px] flex flex-col justify-between pb-6 border-b-2 border-solid border-gray-400'>
                        <img src="178.png" alt="" className='bg-contain'/>
                        <div className='flex gap-2'>
                            <a href="#" className='px-2 py-[1px] bg-red-400 text-white'>Mua</a>
                            <a href="#" className='px-2 py-[1px]  bg-blue-400 text-white'>Thêm giỏ hàng</a>
                        </div>
                    </div>
                    <div className='w-[200px] flex flex-col justify-between pb-6 border-b-2 border-solid border-gray-400'>
                        <img src="190.png" alt="" className='bg-contain'/>
                        <div className='flex gap-2'>
                            <a href="#" className='px-2 py-[1px] bg-red-400 text-white'>Mua</a>
                            <a href="#" className='px-2 py-[1px]  bg-blue-400 text-white'>Thêm giỏ hàng</a>
                        </div>
                    </div>
                </div>
            </main>

            <footer className='mt-20'>
                <div className='h-2 bg-blue-500 w-full'></div>
                <div className='flex px-80 py-10 gap-8 justify-center'>
                    <div className='flex flex-col'>
                        <h2 className='mb-4 font-medium text-lg'>Về công ty</h2>
                        <div>Tầm nhìn sứ mệnh</div>
                        <div>Lịch sử phát triển</div>
                        <div>Thông điệp của tổng giám đốc</div>
                        <div>Chiến lược phát triển</div>
                        <div>Hệ thống quản trị</div>
                        <div>Đơn vị trực thuộc</div>
                        <div>Chứng nhận và giải thưởng</div>
                        <div>Văn hóa doanh nghiệp</div>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='mb-4 font-medium text-lg'>Sản phẩm</h2>
                        <div>Sản phẩm LIX</div>
                        <div>Sản phẩm On1</div>
                        <div>Sản phẩm Iron & Stone</div>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='mb-4 font-medium text-lg'>Truyền thông</h2>
                        <div className='mb-4'>Tin tức sự kiện</div>
                        <h2 className='mb-4 font-medium text-lg'>Liên hệ</h2>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='mb-4 font-medium text-lg'>Cổ đông</h2>
                        <div>Thông tin cổ đông</div>
                        <div>Quan hệ cổ đông</div>
                    </div>
                </div>

                <div className='flex flex-col items-center py-10 bg-blue-100 uppercase'>
                    <h1 className='font-medium text-lg'>Công ty cổ phần bột giặt LIX</h1>
                    <span>Số 3 Đường Số 2, P. Linh Trung, TP. Thủ Đức, TP. HCM.</span>
                    <span>028 - 38 964 072</span>
                    <span>Copyright © 2019 LIX Detergent Joint Stock Company. All rights reserved. Developed by IT Lixco.</span>
                </div>
            </footer>
        </>
    )
}
export default Home