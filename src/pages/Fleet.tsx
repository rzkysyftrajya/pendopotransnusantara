import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarList from "@/components/CarList";
import Terms from "@/components/Terms";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Fleet = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Armada Kami</h1>
          <p className="text-xl max-w-3xl">
            Pilihan lengkap kendaraan berkualitas untuk segala kebutuhan perjalanan Anda
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="all">Semua</TabsTrigger>
              <TabsTrigger value="family">Keluarga</TabsTrigger>
              <TabsTrigger value="luxury">Premium</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <CarList />
            </TabsContent>
            
            <TabsContent value="family">
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold mb-4">Kendaraan untuk Keluarga</h3>
                <p className="text-muted-foreground mb-8">Pilihan nyaman untuk perjalanan bersama keluarga</p>
                <CarList />
              </div>
            </TabsContent>
            
            <TabsContent value="luxury">
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold mb-4">Kendaraan Premium</h3>
                <p className="text-muted-foreground mb-8">Kenyamanan dan kemewahan untuk perjalanan istimewa</p>
                <CarList />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Terms />
      <Footer />
    </div>
  );
};

export default Fleet;
