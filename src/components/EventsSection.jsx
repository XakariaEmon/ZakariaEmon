import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";
import { events } from "../data/events";

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openModal = (event) => {
    setSelectedEvent(event);
    document.getElementById("event_modal").showModal();
  };

  const getCategoryColor = (category) => {
    const colors = {
      Conference: "badge-primary",
      competition: "badge-secondary",
      Competition: "badge-accent",
      Symposium: "badge-info",
      Tournament: "badge-error",
    };
    return colors[category] || "badge-neutral";
  };

  return (
    <AnimatedSection id="events" className="bg-base-200">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle
          title="Events I Attended"
          subtitle="My journey through tech events and learning experiences"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {events.map((event) => (
            <motion.div
              key={event.id}
              className="card bg-base-100 shadow-lg border border-base-content/10 overflow-hidden cursor-pointer group"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => openModal(event)}
            >
              {/* Event Image */}
              <figure className="h-48 overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <div
                    className={`badge ${getCategoryColor(
                      event.category
                    )} badge-lg font-semibold`}
                  >
                    {event.category}
                  </div>
                </div>
              </figure>

              <div className="card-body p-6">
                <h2 className="card-title text-xl mb-2 line-clamp-2">
                  {event.title}
                </h2>

                {/* Event Meta Info */}
                <div className="space-y-2 mb-3 text-sm text-base-content/70">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                </div>

                <p className="text-base-content/80 line-clamp-2 mb-4">
                  {event.shortDescription}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.slice(0, 3).map((tag) => (
                    <div key={tag} className="badge badge-outline badge-sm">
                      {tag}
                    </div>
                  ))}
                </div>

                <div className="card-actions justify-end">
                  <button className="btn btn-primary btn-sm">
                    View Details
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Event Modal */}
        <dialog id="event_modal" className="modal modal-bottom sm:modal-middle">
          <div
            className="modal-box max-w-4xl max-h-[90vh] overflow-y-auto scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {selectedEvent && (
              <>
                {/* Modal Header Image */}
                <figure className="h-56 -mx-6 -mt-6 mb-6 overflow-hidden">
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="w-full h-full object-cover"
                  />
                </figure>

                {/* Modal Content */}
                <div className="space-y-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-bold text-2xl lg:text-3xl flex-1">
                      {selectedEvent.title}
                    </h3>
                    <div
                      className={`badge ${getCategoryColor(
                        selectedEvent.category
                      )} badge-lg`}
                    >
                      {selectedEvent.category}
                    </div>
                  </div>

                  {/* Event Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-base-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-base-content/60 font-semibold">
                          Date
                        </p>
                        <p className="font-medium">{selectedEvent.date}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-base-content/60 font-semibold">
                          Location
                        </p>
                        <p className="font-medium">{selectedEvent.location}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="font-bold text-lg mb-2">My Experience</h4>
                    <p className="text-base-content/80 leading-relaxed">
                      {selectedEvent.fullDescription}
                    </p>
                  </div>

                  {/* Highlights */}
                  {selectedEvent.highlights &&
                    selectedEvent.highlights.length > 0 && (
                      <div>
                        <h4 className="font-bold text-lg mb-3">
                          Key Highlights
                        </h4>
                        <div className="space-y-2">
                          {selectedEvent.highlights.map((highlight, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-3 p-3 bg-base-200 rounded-lg"
                            >
                              <div className="mt-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-primary"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                              <p className="flex-1">{highlight}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  {/* Tags */}
                  <div>
                    <h4 className="font-bold text-lg mb-3">Topics</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedEvent.tags.map((tag) => (
                        <div key={tag} className="badge badge-primary badge-lg">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <form method="dialog" className="modal-backdrop">
            <button onClick={() => setSelectedEvent(null)}>close</button>
          </form>
        </dialog>
      </div>
    </AnimatedSection>
  );
};

export default EventsSection;
