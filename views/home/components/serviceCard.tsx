type ServiceCardProps = {
  service: {
    title: string;
    description: string;
    whatWeOffer: string[];
    benefit: string;
  };
};
export const ServiceCard = ({ service }: ServiceCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-lg w-full">
    <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
    <p className="text-gray-600 mb-4">{service.description}</p>
    
    <h4 className="text-lg font-semibold mb-2">Qué ofrecemos:</h4>
    <ul className="list-disc pl-6 mb-4">
      {service.whatWeOffer.map((item, index) => (
        <li key={index} className="text-gray-600">{item}</li>
      ))}
    </ul>
  </div>
);