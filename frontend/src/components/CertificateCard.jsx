export default function CertificateCard({ img, size }) {
  return (
    <div className="flex-shrink-0 rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition duration-300">
      <img
        src={img}
        alt="Certificates"
        className={size || "w-full h-full object-cover rounded-lg"}
      />
    </div>
  );
}
