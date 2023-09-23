import cv2
import mediapipe as mp
import time

class draw_mesh():
    def __init__(self, static_image = False, max_n_face = 6, redefine_landmarks = True, confidence_detection = 0.75, confidence_tracking = 0.75):

        self.static_image = static_image
        self.max_n_face = max_n_face
        self.redifine_landmarks = redefine_landmarks
        self.confidence_detection = confidence_detection
        self.confidence_tracking = confidence_tracking

        self.mpDraw = mp.solutions.drawing_utils
        self.mpFaceMesh = mp.solutions.face_mesh
        self.faceMesh = self.mpFaceMesh.FaceMesh(self.static_image, self.max_n_face, self.redifine_landmarks, self.confidence_detection, self.confidence_tracking)
        self.drawSpec = self.mpDraw.DrawingSpec(thickness=1, circle_radius=2)
        self.mp_drawing_styles = mp.solutions.drawing_styles

    def face_mesh(self, frame, draw = True):
        frameRGB = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        results = self.faceMesh.process(frameRGB)

        if results.multi_face_landmarks:
            for face_landmarks in results.multi_face_landmarks:
                self.mpDraw.draw_landmarks(
                    image=frame,
                    landmark_list=face_landmarks,
                    connections=self.mpFaceMesh.FACEMESH_TESSELATION,
                    landmark_drawing_spec=None,
                    connection_drawing_spec=self.mp_drawing_styles
                    .get_default_face_mesh_tesselation_style())
                self.mpDraw.draw_landmarks(
                    image=frame,
                    landmark_list=face_landmarks,
                    connections=self.mpFaceMesh.FACEMESH_CONTOURS,
                    landmark_drawing_spec=None,
                    connection_drawing_spec=self.mp_drawing_styles
                    .get_default_face_mesh_contours_style())
        return frame
    
def main():
    
    cap = cv2.VideoCapture(0)
    time_previous = 0
    mesh = draw_mesh()
    while True:
        ret, frame = cap.read()
        frame = mesh.face_mesh(frame)



        cv2.imshow('Webcam', frame)

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

if __name__ == '__main__':
    main()
