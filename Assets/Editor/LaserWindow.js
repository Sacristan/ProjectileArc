#pragma strict

//@CustomEditor (LaserArc)

class LaserWindow extends EditorWindow {

var arrowColor : Color;
var animate : boolean = true;
var animationSpeed : float = 2;
var width : float = 2;
enum MaterialType {Arrow,Laser};
var showMaterial : MaterialType;

    @MenuItem ("Window/Laser Trajectory")
    static function ShowWindow () {
        EditorWindow.GetWindow (LaserWindow);
    }

    function OnGUI () {
             
        GUILayout.Label ("Base Settings", EditorStyles.boldLabel);
        
        showMaterial = EditorGUILayout.EnumPopup ("Material",showMaterial);
        width = EditorGUILayout.Slider ("Width", width, 0, 7);
        arrowColor = EditorGUILayout.ColorField("Arrow Color",arrowColor);
		animate = EditorGUILayout.BeginToggleGroup ("Animate", animate);
		animationSpeed = EditorGUILayout.Slider ("Animation Speed", animationSpeed, 0, 15);

		EditorGUILayout.EndToggleGroup ();

        LaserArc.animateTexture = animate;
        LaserArc.animationSpeed = animationSpeed;
        LaserArc.width = width;
        LaserArc.currentTexture = showMaterial;
        LaserArc.textureColor = arrowColor;
    }
    
    
}