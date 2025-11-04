import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    name: "Jane Smith",
    role: "Tour Manager",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    name: "Alex Johnson",
    role: "Marketing Head",
    image: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
];

const Team = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tim Kami</h2>
          <p className="text-lg text-muted-foreground">Meet the experts behind our success</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-xl">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
