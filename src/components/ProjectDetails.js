import Image from 'next/image';
import YouTube from 'react-youtube';
import dynamic from 'next/dynamic';

const ModelViewer = dynamic(() => import('./ModelViewer'), {
  ssr: false,
  loading: () => <p>Loading 3D model...</p>
});

export default function ProjectDetails({ project, onClose }) {
  return (
    <div className="project-details" onClick={(e) => e.stopPropagation()}>
      <p>{project.title}</p>
      {project.imagePath && (
        <div className="image-container">
          <Image 
            src={project.imagePath}
            alt={project.title}
            width={800}
            height={600}
            className="project-image"
            loading="lazy"
          />
        </div>
      )}
      {project.modelPath && (
        <div className="model-viewer-container">
          <ModelViewer modelPath={project.modelPath} isThumb={false} />
        </div>
      )}
      {project.videoId && (
        <div className="video-container">
          <YouTube videoId={project.videoId} />
        </div>
      )}
      <button className="close-button" onClick={onClose}></button>
    </div>
  );
}