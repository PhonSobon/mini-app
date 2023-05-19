import BannerHome from '@/components/Home/BannerHome'
import CardCategory from '@/components/Home/CardCategory';
import Card from '@/components/Home/CardHome';
import CardUser from '@/components/Home/CardUser';

export async function getData() {
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/products?limit=20&offset=0", {cache: "no-store"}
  );
  const data = await res.json();
  return data;
}
export async function getCategoryList() {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories")
  const categoryData = await res.json();
  return categoryData;
}
export async function getUsers(){
  const res =await fetch("https://api.escuelajs.co/api/v1/users")
  const usersData = await res.json();
  return usersData;
}

export  default async function Home() {
  const products = await getData();
  const categories =await getCategoryList();
  const users = await getUsers();
  return (
    <main className=' min-h-screen  items-center justify-between  p-24'>
      <BannerHome/>
      <h1 className='m-4 text-4xl text-center font-extrabold tracking-tight leading-none text-pink-400 md:text-5xl lg:text-6xl dark:text-white'>Product</h1>
       <div className='grid grid-cols-4 gap-4 '>
          {products.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.images[0]}
              />
            ))}
        </div>
        <h1 className='m-4 text-4xl text-center font-extrabold tracking-tight leading-none text-pink-400 md:text-5xl lg:text-6xl dark:text-white'>categories</h1>
        <div className='grid grid-cols-4 gap-4'>
        {categories.map((categor)=>(
            <CardCategory
              image={categor.image}
              name={categor.name}
            />
        ))}
        </div>
        <h1 className='m-4 text-4xl text-center font-extrabold tracking-tight leading-none text-pink-400 md:text-5xl lg:text-6xl dark:text-white'>users</h1>
        <div className='grid grid-cols-4 gap-4'>
        {users.map((user)=>(
            <CardUser
              avatar={user.avatar}
              name={user.name}
            />
        ))}
        </div>
        
    </main>
  )
}
