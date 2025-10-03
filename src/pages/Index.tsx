import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("all");
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "Все ароматы" },
    { id: "women", label: "Женские" },
    { id: "men", label: "Мужские" },
    { id: "unisex", label: "Унисекс" },
  ];

  const priceRanges = [
    { id: "all", label: "Любая цена" },
    { id: "budget", label: "До 5000₽" },
    { id: "medium", label: "5000₽ - 10000₽" },
    { id: "premium", label: "От 10000₽" },
  ];

  const perfumes = [
    {
      id: 1,
      name: "Velvet Rose",
      brand: "ÉLITE",
      price: 8990,
      category: "women",
      image: "/img/717d0a5f-b089-42dc-bac0-fab8b6f6391b.jpg",
      description: "Нежный цветочный аромат с нотами розы и ванили",
      notes: ["Роза", "Ваниль", "Мускус"],
      bestseller: true,
    },
    {
      id: 2,
      name: "Black Oud",
      brand: "NOIR",
      price: 12990,
      category: "men",
      image: "/img/9a583743-3056-47a6-bf60-9a7c979dfe5f.jpg",
      description: "Глубокий восточный аромат с нотами уда и кожи",
      notes: ["Уд", "Кожа", "Амбра"],
      bestseller: false,
    },
    {
      id: 3,
      name: "Golden Essence",
      brand: "LUXE",
      price: 9990,
      category: "unisex",
      image: "/img/18808d7e-c16c-4bd7-a288-40b0d91019b4.jpg",
      description: "Элегантный унисекс аромат с цитрусовыми нотами",
      notes: ["Бергамот", "Сандал", "Пачули"],
      bestseller: true,
    },
    {
      id: 4,
      name: "Cherry Blossom",
      brand: "BLOOM",
      price: 7490,
      category: "women",
      image: "/img/717d0a5f-b089-42dc-bac0-fab8b6f6391b.jpg",
      description: "Свежий весенний аромат с нотами цветущей вишни",
      notes: ["Вишневый цвет", "Пион", "Белый чай"],
      bestseller: false,
    },
    {
      id: 5,
      name: "Ocean Drive",
      brand: "MARINE",
      price: 6990,
      category: "men",
      image: "/img/9a583743-3056-47a6-bf60-9a7c979dfe5f.jpg",
      description: "Свежий морской аромат для активных мужчин",
      notes: ["Морская соль", "Цитрус", "Кедр"],
      bestseller: false,
    },
    {
      id: 6,
      name: "Amber Night",
      brand: "ORIENT",
      price: 11490,
      category: "unisex",
      image: "/img/18808d7e-c16c-4bd7-a288-40b0d91019b4.jpg",
      description: "Таинственный вечерний аромат с восточными нотами",
      notes: ["Амбра", "Сандал", "Ваниль"],
      bestseller: true,
    },
  ];

  const getFilteredPerfumes = () => {
    return perfumes.filter((perfume) => {
      const matchesCategory = selectedCategory === "all" || perfume.category === selectedCategory;
      
      let matchesPrice = true;
      if (selectedPriceRange === "budget") matchesPrice = perfume.price < 5000;
      if (selectedPriceRange === "medium") matchesPrice = perfume.price >= 5000 && perfume.price <= 10000;
      if (selectedPriceRange === "premium") matchesPrice = perfume.price > 10000;

      const matchesSearch = perfume.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           perfume.brand.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesPrice && matchesSearch;
    });
  };

  const addToCart = (id: number) => {
    setCartItems([...cartItems, id]);
  };

  const removeFromCart = (id: number) => {
    const index = cartItems.indexOf(id);
    if (index > -1) {
      const newCart = [...cartItems];
      newCart.splice(index, 1);
      setCartItems(newCart);
    }
  };

  const isInCart = (id: number) => cartItems.includes(id);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              PARFUMERIE
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">
              Каталог
            </a>
            <a href="#bestsellers" className="text-sm font-medium hover:text-primary transition-colors">
              Хиты продаж
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              О нас
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>

          <Button variant="outline" size="sm" className="relative">
            <Icon name="ShoppingBag" className="h-4 w-4 mr-2" />
            Корзина
            {cartItems.length > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0">
                {cartItems.length}
              </Badge>
            )}
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-background dark:from-purple-950/20 dark:via-pink-950/20 dark:to-background py-24 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Icon name="Sparkles" className="h-4 w-4" />
                Новая коллекция 2024
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Откройте мир
                <span className="block bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  изысканных ароматов
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl">
                Эксклюзивная коллекция парфюмерии от мировых брендов. 
                Найдите свой уникальный аромат среди более 500 позиций.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2 text-lg px-8">
                  <Icon name="Search" className="h-5 w-5" />
                  Подобрать аромат
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Смотреть каталог
                </Button>
              </div>

              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Ароматов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Брендов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Клиентов</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl"></div>
              <img
                src="/img/18808d7e-c16c-4bd7-a288-40b0d91019b4.jpg"
                alt="Luxury perfume"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-y bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="ShieldCheck" className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold">100% Оригинал</div>
                <div className="text-sm text-muted-foreground">Гарантия качества</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Truck" className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold">Быстрая доставка</div>
                <div className="text-sm text-muted-foreground">1-3 дня по РФ</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Gift" className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold">Подарки</div>
                <div className="text-sm text-muted-foreground">К каждому заказу</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Headphones" className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold">Поддержка 24/7</div>
                <div className="text-sm text-muted-foreground">Всегда на связи</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="bestsellers" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">Популярное</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Хиты продаж</h2>
            <p className="text-muted-foreground text-lg">
              Ароматы, которые выбирают чаще всего
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {perfumes.filter(p => p.bestseller).map((perfume) => (
              <Card key={perfume.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50">
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-primary/5 to-purple-500/5">
                  {perfume.bestseller && (
                    <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-500 to-orange-500">
                      <Icon name="Star" className="h-3 w-3 mr-1" />
                      Хит
                    </Badge>
                  )}
                  <img
                    src={perfume.image}
                    alt={perfume.name}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <CardHeader>
                  <CardDescription className="text-xs uppercase tracking-wider">
                    {perfume.brand}
                  </CardDescription>
                  <CardTitle className="text-2xl">{perfume.name}</CardTitle>
                  <p className="text-muted-foreground text-sm">{perfume.description}</p>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {perfume.notes.map((note, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {note}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    {perfume.price.toLocaleString()}₽
                  </div>
                </CardContent>

                <CardFooter className="gap-2">
                  {isInCart(perfume.id) ? (
                    <Button
                      variant="destructive"
                      className="flex-1"
                      onClick={() => removeFromCart(perfume.id)}
                    >
                      <Icon name="Trash2" className="h-4 w-4 mr-2" />
                      Удалить
                    </Button>
                  ) : (
                    <Button
                      className="flex-1 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                      onClick={() => addToCart(perfume.id)}
                    >
                      <Icon name="ShoppingBag" className="h-4 w-4 mr-2" />
                      В корзину
                    </Button>
                  )}
                  <Button variant="outline" size="icon">
                    <Icon name="Heart" className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Полный каталог</h2>
            <p className="text-muted-foreground text-lg">
              Найдите свой идеальный аромат
            </p>
          </div>

          <div className="mb-8 space-y-6">
            <div className="relative max-w-xl mx-auto">
              <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Поиск по названию или бренду..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-lg"
              />
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <div className="flex gap-2">
                {categories.map((cat) => (
                  <Button
                    key={cat.id}
                    variant={selectedCategory === cat.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(cat.id)}
                  >
                    {cat.label}
                  </Button>
                ))}
              </div>
              
              <div className="flex gap-2">
                {priceRanges.map((range) => (
                  <Button
                    key={range.id}
                    variant={selectedPriceRange === range.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedPriceRange(range.id)}
                  >
                    {range.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredPerfumes().map((perfume) => (
              <Card key={perfume.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                  {perfume.bestseller && (
                    <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-500 to-orange-500">
                      <Icon name="Star" className="h-3 w-3 mr-1" />
                      Хит
                    </Badge>
                  )}
                  <img
                    src={perfume.image}
                    alt={perfume.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardDescription className="text-xs uppercase tracking-wider">
                        {perfume.brand}
                      </CardDescription>
                      <CardTitle className="mt-1">{perfume.name}</CardTitle>
                    </div>
                    <Badge variant="secondary" className="text-lg font-bold">
                      {perfume.price.toLocaleString()}₽
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{perfume.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {perfume.notes.map((note, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {note}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="gap-2">
                  {isInCart(perfume.id) ? (
                    <Button
                      variant="destructive"
                      className="flex-1"
                      onClick={() => removeFromCart(perfume.id)}
                    >
                      <Icon name="Trash2" className="h-4 w-4 mr-2" />
                      Удалить
                    </Button>
                  ) : (
                    <Button
                      className="flex-1"
                      onClick={() => addToCart(perfume.id)}
                    >
                      <Icon name="ShoppingBag" className="h-4 w-4 mr-2" />
                      В корзину
                    </Button>
                  )}
                  <Button variant="outline" size="icon">
                    <Icon name="Heart" className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {getFilteredPerfumes().length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ничего не найдено</h3>
              <p className="text-muted-foreground">Попробуйте изменить параметры поиска</p>
            </div>
          )}
        </div>
      </section>

      <section id="about" className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-pink-500/20 blur-3xl"></div>
              <img
                src="/img/717d0a5f-b089-42dc-bac0-fab8b6f6391b.jpg"
                alt="About us"
                className="relative rounded-3xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>

            <div className="space-y-6">
              <Badge>О нас</Badge>
              <h2 className="text-4xl md:text-5xl font-bold">
                Мы создаем незабываемые впечатления
              </h2>
              <p className="text-lg text-muted-foreground">
                PARFUMERIE — это премиальный интернет-магазин оригинальной парфюмерии. 
                Мы работаем напрямую с официальными дистрибьюторами и гарантируем 
                100% подлинность каждого аромата.
              </p>
              <p className="text-lg text-muted-foreground">
                Наша миссия — помочь каждому найти свой уникальный аромат, который 
                подчеркнет индивидуальность и создаст незабываемое впечатление.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 rounded-lg bg-primary/5">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-primary/5">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Ароматов</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-primary/5">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-purple-600 to-pink-600 text-white">
        <div className="container text-center">
          <Icon name="Sparkles" className="h-12 w-12 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Подпишитесь на рассылку
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Получайте эксклюзивные предложения, новинки и советы по выбору ароматов
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Ваш email"
              className="bg-white text-foreground h-12"
            />
            <Button size="lg" variant="secondary" className="px-8">
              Подписаться
            </Button>
          </div>
        </div>
      </section>

      <footer id="contact" className="py-12 border-t bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  PARFUMERIE
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Премиальная парфюмерия для вашего неповторимого стиля
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Каталог</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Женские ароматы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Мужские ароматы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Унисекс</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Новинки</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Возврат и обмен</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Гарантия качества</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4 text-primary" />
                  <a href="tel:+79999999999" className="hover:text-primary transition-colors">
                    +7 (999) 999-99-99
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4 text-primary" />
                  <a href="mailto:info@parfumerie.ru" className="hover:text-primary transition-colors">
                    info@parfumerie.ru
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" className="h-4 w-4 text-primary" />
                  <span>Москва, ул. Примерная, 123</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 PARFUMERIE. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
