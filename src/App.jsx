import './App.css';

import logo from './icons/logo.svg';
import home from './icons/home.svg';
import discount from './icons/discount.svg';
import graph from './icons/graph.svg';
import messages from './icons/messages.svg';
import notifications from './icons/notifications.svg';
import settings from './icons/settings.svg';
import logout from './icons/logout.svg';
import search from './icons/search.svg';
import trash from './icons/trash.svg';

import card1 from './images/card1-min.png';
import card2 from './images/card2-min.png';
import card3 from './images/card3-min.png';
import card4 from './images/card4-min.png';
import card5 from './images/card5-min.png';
import card6 from './images/card6-min.png';
import card7 from './images/card7-min.png';

function App() {
return (
    <div className="App min-h-full text-white w-full bg-[#252836]">
        <div className='Sidebar fixed left-0 h-full w-[100px] bg-[#1F1D2B] pl-2'>
            <div className='relative right-[-12px]'>
                <div className='bg-[#1F1D2B] rounded-br-xl p-3 cursor-pointer'>
                    <img src={logo} alt="" />
                </div>
                <div className='bg-[#252836] rounded-l-xl p-3 cursor-pointer'>
                    <img className='bg-[#EA7C69] rounded-lg p-4' src={home} alt="" />
                </div>
                <div className='bg-[#1F1D2B] rounded-tr-xl p-3 cursor-pointer'>
                    <img className='bg-[#1F1D2B] p-4' src={discount} alt="" />
                </div>
                <div className='bg-[#1F1D2B] p-3 cursor-pointer'>
                    <img className='bg-[#1F1D2B] p-4' src={graph} alt="" />
                </div>
                <div className='bg-[#1F1D2B] p-3 cursor-pointer'>
                    <img className='bg-[#1F1D2B] p-4' src={messages} alt="" />
                </div>
                <div className='bg-[#1F1D2B] p-3 cursor-pointer'>
                    <img className='bg-[#1F1D2B] p-4' src={notifications} alt="" />
                </div>
                <div className='bg-[#1F1D2B] p-3 cursor-pointer'>
                    <img className='bg-[#1F1D2B] p-4' src={settings} alt="" />
                </div>
                <div className='bg-[#1F1D2B] p-3 cursor-pointer'>
                    <img className='bg-[#1F1D2B] p-4' src={logout} alt="" />
                </div>
            </div>

        </div>
        <div className='pl-[112px] pr-[400px]'>
        <div className='Main min-h-full px-3'>
            <div className='Header py-4 px-3'>
                <div className='inline-block'>
                    <h2 className='text-2xl'>Jaegar Resto</h2>
                    <p className='text-[#E0E6E9]'>Tuesday, 2 Feb 2021</p>
                </div>
                <div className='relative inline-block float-right w-2/6 mr-4'>
                    <input className='w-full py-2 px-2 pl-10 bg-[#2D303E]' type="text" placeholder='Search for food, coffee, etc..'/>
                    <img className='absolute left-3 top-[10px]' src={search} alt="" />
                </div>
            </div>

            <div className='border-b border-[#393C49] flex'>
                <div className='p-4 text-[#EA7C69] border-b border-[#EA7C69] cursor-pointer'>Hot Dishes</div>
                <div className='p-4 cursor-pointer'>Cold Dishes</div>
                <div className='p-4 cursor-pointer'>Soup</div>
                <div className='p-4 cursor-pointer'>Grill</div>
                <div className='p-4 cursor-pointer'>Appetizer</div>
                <div className='p-4 cursor-pointer'>Dessert</div>
            </div>

            <div>
                <div className='pt-6 mb-16'>
                    <h4 className='inline text-xl leading-[48px]'>Choose Dishes</h4>
                    <select className='float-right p-4 rounded-lg bg-[#1F1D2B] border border-[#393C49]' name="" id="">
                        <option value="dine in">Dine In</option>
                    </select>
                </div>

                <div className='grid grid-cols-3 gap-10 pb-20'>
                    <div className='h-[110%] text-center p-6 bg-[#1F1D2B] rounded-3xl cursor-pointer'>
                        <img className='relative top-[-60px] mb-[-60px] w-10/12 m-auto' src={card1} alt="" />
                        <div className='pt-4'>
                            <h4 className='mb-2'>Spicy seasoned seafood noodles</h4>
                            <p className='mb-2'>$ 2.29</p>
                            <p className='text-[#ABBBC2]'>20 Bowls available</p>
                        </div>
                    </div>
                    <div className='h-[110%] text-center p-6 bg-[#1F1D2B] rounded-3xl cursor-pointer'>
                        <img className='relative top-[-60px] mb-[-60px] w-10/12 m-auto' src={card2} alt="" />
                        <div className='pt-4'>
                            <h4 className='mb-2'>Salted Pasta with mushroom sauce</h4>
                            <p className='mb-2'>$ 2.69</p>
                            <p className='text-[#ABBBC2]'>11 Bowls available</p>
                        </div>
                    </div>
                    <div className='h-[110%] text-center p-6 bg-[#1F1D2B] rounded-3xl cursor-pointer'>
                        <img className='relative top-[-60px] mb-[-60px] w-10/12 m-auto' src={card3} alt="" />
                        <div className='pt-4'>
                            <h4 className='mb-2'>Beef dumpling in hot and sour soup</h4>
                            <p className='mb-2'>$ 2.99</p>
                            <p className='text-[#ABBBC2]'>16 Bowls available</p>
                        </div>
                    </div>
                    <div className='h-[110%] text-center p-6 bg-[#1F1D2B] rounded-3xl cursor-pointer'>
                        <img className='relative top-[-60px] mb-[-60px] w-10/12 m-auto' src={card4} alt="" />
                        <div className='pt-4'>
                            <h4 className='mb-2'>Healthy noodle with spinach leaf</h4>
                            <p className='mb-2'>$ 3.29</p>
                            <p className='text-[#ABBBC2]'>22 Bowls available</p>
                        </div>
                    </div>
                    <div className='h-[110%] text-center p-6 bg-[#1F1D2B] rounded-3xl cursor-pointer'>
                        <img className='relative top-[-60px] mb-[-60px] w-10/12 m-auto' src={card5} alt="" />
                        <div className='pt-4'>
                            <h4 className='mb-2'>Hot spicy fried rice with omelet</h4>
                            <p className='mb-2'>$ 3.49</p>
                            <p className='text-[#ABBBC2]'>13 Bowls available</p>
                        </div>
                    </div>
                    <div className='h-[110%] text-center p-6 bg-[#1F1D2B] rounded-3xl cursor-pointer'>
                        <img className='relative top-[-60px] mb-[-60px] w-10/12 m-auto' src={card6} alt="" />
                        <div className='pt-4'>
                            <h4 className='mb-2'>Spicy instant noodle with special omelette</h4>
                            <p className='mb-2'>$ 3.59</p>
                            <p className='text-[#ABBBC2]'>17 Bowls available</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className='Cart fixed right-0 top-0 h-full w-[400px] px-3 bg-[#1F1D2B]'>
            <h4 className='text-xl mb-4'>Orders #34562</h4>
            <div className='flex'>
                <div className='mr-4 px-4 py-1 rounded-lg bg-[#EA7C69] cursor-pointer'>Dine In</div>
                <div className='mr-4 px-4 py-1 text-[#EA7C69] rounded-lg border border-[#393C49] cursor-pointer'>To Go</div>
                <div className='mr-4 px-4 py-1 text-[#EA7C69] rounded-lg border border-[#393C49] cursor-pointer'>Delivery</div>
            </div>
            <div className='grid grid-cols-8 py-4 border-b border-[#393C49]'>
                <p className='cols-span-5'>Item</p>
                <p className='col-start-6 m-auto w-fit'>Qty</p>
                <p className='col-start-7 col-span-2 m-auto w-fit'>Price</p>
            </div>

            <div className='pt-6 overflow-y-scroll no-scrollbar h-[58%]'>
                <div className='mb-6'>
                    <div className='grid grid-cols-8 gap-2 mb-4'>
                        <div className='col-span-1 h-[40px] pt-1'>
                            <img className='' src={card1} alt="" />
                        </div>
                        <div className='col-span-4 h-[40px]'>
                            <p className='overflow-hidden whitespace-nowrap text-ellipsis'>Spicy seasoned seafood noodles</p>
                            <span className='text-[#ABBBC2]'>$ 2.29</span>
                        </div>
                        <input className='h-[40px] py-1 rounded-lg bg-[#2D303E] text-center' value="2">
                        </input>
                        <div className='h-[40px] pt-2 col-span-2 text-center'>
                            $ 4.58
                        </div>
                    </div>
                    <div className='grid grid-cols-8 gap-2'>
                        <div className='col-span-6'>
                            <input className='w-full py-2 px-4 rounded-lg bg-[#2D303E] text-[#E0E6E9]' type="text" placeholder='Order Note...' />
                        </div>
                        <div className='col-span-2 m-auto w-fit'>
                            <button className='rounded-lg border border-[#FF7CA3]'>
                                <img className='p-2 inline-block' src={trash} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='mb-6'>
                    <div className='grid grid-cols-8 gap-2 mb-4'>
                        <div className='col-span-1 h-[40px] pt-1'>
                            <img className='' src={card2} alt="" />
                        </div>
                        <div className='col-span-4 h-[40px]'>
                            <p className='overflow-hidden whitespace-nowrap text-ellipsis'>Salted Pasta with mushroom sauce</p>
                            <span className='text-[#ABBBC2]'>$ 2.69</span>
                        </div>
                        <input className='h-[40px] py-1 rounded-lg bg-[#2D303E] text-center' value="1">
                        </input>
                        <div className='h-[40px] pt-2 col-span-2 text-center'>
                            $ 2.69
                        </div>
                    </div>
                    <div className='grid grid-cols-8 gap-2'>
                        <div className='col-span-6'>
                            <input className='w-full py-2 px-4 rounded-lg bg-[#2D303E] text-[#E0E6E9]' type="text" placeholder='Order Note...' />
                        </div>
                        <div className='col-span-2 m-auto w-fit'>
                            <button className='rounded-lg border border-[#FF7CA3]'>
                                <img className='p-2 inline-block' src={trash} alt="" />

                            </button>
                        </div>
                    </div>
                </div>
                <div className='mb-6'>
                    <div className='grid grid-cols-8 gap-2 mb-4'>
                        <div className='col-span-1 h-[40px] pt-1'>
                            <img className='' src={card6} alt="" />
                        </div>
                        <div className='col-span-4 h-[40px]'>
                            <p className='overflow-hidden whitespace-nowrap text-ellipsis'>Spicy instant noodle with special omelette</p>
                            <span className='text-[#ABBBC2]'>$ 3.49</span>
                        </div>
                        <input className='h-[40px] py-1 rounded-lg bg-[#2D303E] text-center' value="1">
                        </input>
                        <div className='h-[40px] pt-2 col-span-2 text-center'>
                            $ 10.47
                        </div>
                    </div>
                    <div className='grid grid-cols-8 gap-2'>
                        <div className='col-span-6'>
                            <input className='w-full py-2 px-4 rounded-lg bg-[#2D303E] text-[#E0E6E9]' type="text" placeholder='Order Note...' />
                        </div>
                        <div className='col-span-2 m-auto w-fit'>
                            <button className='rounded-lg border border-[#FF7CA3]'>
                                <img className='p-2 inline-block' src={trash} alt="" />

                            </button>
                        </div>
                    </div>
                </div>
                <div className='mb-6'>
                    <div className='grid grid-cols-8 gap-2 mb-4'>
                        <div className='col-span-1 h-[40px] pt-1'>
                            <img className='' src={card7} alt="" />
                        </div>
                        <div className='col-span-4 h-[40px]'>
                            <p className='overflow-hidden whitespace-nowrap text-ellipsis'>Healthy noodle with spinach leaf</p>
                            <span className='text-[#ABBBC2]'>$ 3.29</span>
                        </div>
                        <input className='h-[40px] py-1 rounded-lg bg-[#2D303E] text-center' value="1">
                        </input>
                        <div className='h-[40px] pt-2 col-span-2 text-center'>
                            $ 3.29
                        </div>
                    </div>
                    <div className='grid grid-cols-8 gap-2'>
                        <div className='col-span-6'>
                            <input className='w-full py-2 px-4 rounded-lg bg-[#2D303E] text-[#E0E6E9]' type="text" placeholder='Order Note...' />
                        </div>
                        <div className='col-span-2 m-auto w-fit'>
                            <button className='rounded-lg border border-[#FF7CA3]'>
                                <img className='p-2 inline-block' src={trash} alt="" />

                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='absolute bottom-0 w-11/12'>
                <div className='mb-4'>
                    <p className='inline-block text-[#ABBBC2]'>Discount</p>
                    <p className='float-right inline-block text-['>$0</p>
                </div>
                <div className='mb-6'>
                    <p className='inline-block text-[#ABBBC2]'>Sub total</p>
                    <p className='float-right inline-block'>$ 21.03</p>
                </div>
                <div className='pb-4'>
                    <button className='w-full px-10 py-4 rounded-lg bg-[#EA7C69]'>Continue to Payment</button>
                </div>
            </div>
        </div>
    </div>
);
}

export default App;
